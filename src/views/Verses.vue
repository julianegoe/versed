<template>
<transition name="fade">
    <Modal @close="closeModal" 
    v-if="modalOpen" 
    v-model:line1="line1"
    v-model:line2="line2"
    v-model:line3="line3"
    v-model:line4="line4"
    v-model:line5="line5"
    @addDoc="addDocument" />
</transition>
<div>
    <div class="verses-layout">
        <Verse v-for="verse, index in verses" :key="index" :verse="verse" />
    </div>
</div>
<AddButton @open="openModal" />
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, query, orderBy, collection, onSnapshot, Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import Verse from '@/components/Verse.vue';
import AddButton from '@/components/AddButton.vue';
import Modal from '@/components/Modal.vue';
import { auth, db } from '@/firebase';

    export default {
        name: 'Verses',
        components: { Verse, AddButton, Modal },
        data() {
            return {
                isLoggedIn: false,
                verses: {},
                line1: "",
                line2: "",
                line3: "",
                line4: "",
                line5: "",
                type: "Elfchen",
                currentUser: null,
                unsubscribe: null,
                modalOpen: false,
            };
        },
        methods: {
            async listenToDataChange() {
                const q = query(collection(db, "Verses"), orderBy("created", "desc"));
                this.unsubscribe = onSnapshot(q, (querySnapshot) => {          
                const verses = [];
                querySnapshot.forEach((doc) => {
                verses.push(doc.data());
                });
                this.verses = verses;
                console.log("Current verses in database: ", verses);
                });
            },
            async addDocument() {
                this.modalOpen = false;
                const docData = {
                id: uuidv4(),
                line1: this.line1.split(' '),
                line2: this.line2.split(' '),
                line3: this.line3.split(' '),
                line4: this.line4.split(' '),
                line5: this.line5.split(' '),
                type: this.type,
                created: Timestamp.fromDate(new Date()),
                creator: this.currentUser,
            };  console.log(docData);
                const docRef = await addDoc(collection(db, "Verses"), docData );
                console.log("Document written with ID: ", docRef.id);
            },
            openModal() {
                this.modalOpen = true;
            },
            closeModal() {
                this.modalOpen = false;
            },
        },
        mounted() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    this.isLoggedIn = true;
                    this.currentUser = user.uid;
                this.listenToDataChange()
                } else {
                    this.isLoggedIn = false;
                    this.unsubscribe();
                    this.$router.replace({name: 'Login'})
                }
            });
        },
        beforeUnmount() {
            this.unsubscribe();
        }
    }
</script>

<style lang="scss" scoped>

.verses-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


</style>