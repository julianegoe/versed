<template>
<div class="profile-layout">
    <div class="profile-info">
        <img v-if="photoURL" :src="photoURL" alt="upload">
        <p>Username: {{displayName}}</p>
        <p>E-Mail: {{email}}</p>
    </div>
    <form @submit.prevent="uploadImage">
        <input  @change="getUploadImageData" type="file" />
        <button type="submit">Upload Profile Image</button>
    </form>
    <form @submit.prevent="updateUserName">
        <input v-model="username" type="text">
        <button type="submit">Edit Username</button>
    </form>
    <div v-if="verses" >
        <Verse v-for="verse, index in verses" :key="index" :verse="verse" />
    </div>
</div>
</template>

<script>
import { query, orderBy, where, collection, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { db, auth, storage } from '@/firebase';
import Verse from '@/components/Verse.vue';

export default {
    name: 'Profile',
    components: { Verse },
    data() {
        return {
            isLoggedIn: true,
            downloadImagePath: null,
            uploadImageData: null,
            username: '',
            displayName: '',
            photoURL: '',
            email: '',
            unsibscribe: null,
            verses: [],
        }
    },
    methods: {
        async updateUserImage() {
            try {
                await updateProfile(auth.currentUser, {
                photoURL: this.downloadImagePath
                });
                const user = auth.currentUser;
                this.photoURL = user.photoURL;
            } catch (error) {
                console.log(error)
            }
        },
        async updateUserName() {
            try {
                await updateProfile(auth.currentUser, {
                displayName: this.username
                });
                const user = auth.currentUser;
                this.displayName = user.displayName;
            } catch (error) {
                console.log(error)
            }
        },
        async uploadImage() {
            const storageRef = ref(storage, `images/${this.uploadImageData.name}`);
            await uploadBytes(storageRef, this.uploadImageData);
            this.downloadImagePath = await getDownloadURL(storageRef);
            this.updateUserImage();
        },
        getUploadImageData(event) {
            console.log(this.uploadImageData = event.target.files[0]);
            this.uploadImageData = event.target.files[0];
        },
        async getVersesByUserId() {
                const q = query(collection(db, "Verses"), where('creator', '==', auth.currentUser.uid), orderBy("created", "desc"));
                this.unsubscribe = onSnapshot(q, (querySnapshot) => {          
                const verses = [];
                querySnapshot.forEach((doc) => {
                verses.push(doc.data());
                });
                this.verses = verses;
                console.log("Current verses by user: ", verses);
                });
            },
    },
    mounted() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    this.isLoggedIn = true;
                    this.displayName = user.displayName;
                    this.photoURL = user.photoURL;
                    this.email = user.email;
                    this.getVersesByUserId();
                } else {
                    this.isLoggedIn = false;
                    this.unsubscribe();
                    this.$router.replace({name: 'Login'})
                }
            });
        },
}
</script>
<style lang="scss">

.profile-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .profile.-info {
        width: 70%;
    }
    img {
        aspect-ratio: 1;
        width: 10rem;
        object-fit: contain;
        border-radius: 50%;   
        }
}
</style>
