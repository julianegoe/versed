<template>
<transition name="fade">
    <Modal 
    v-if="$store.state.isModalOpen" />
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
import { query, orderBy, collection, onSnapshot } from "firebase/firestore";
import Verse from '@/components/Verse.vue';
import AddButton from '@/components/AddButton.vue';
import Modal from '@/components/Modal.vue';
import { auth, db } from '@/firebase';

    export default {
        name: 'Verses',
        components: { Verse, AddButton, Modal },
        data() {
            return {
                verses: {},
                type: "Elfchen",
                currentUser: null,
                unsubscribe: null,
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
            openModal() {
                this.$store.dispatch('resetElfchen');
                this.$store.dispatch('setModalOpen');
            },
        },
        mounted() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    this.currentUser = user.uid;
                this.listenToDataChange()
                } else {
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
    margin-top: 1rem;

    @media(max-width: 500px ) {
        gap: 0;
    }
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