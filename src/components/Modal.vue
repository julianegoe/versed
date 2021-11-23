<template>
<div class="modal-container">
    <div class="modal">
        <button class="close-btn" v-on:click="closeModal">
            <img src="../assets/icons/x.svg" alt="Bootstrap" width="32" height="32">
        </button>
        <h2>Schreibe ein Elfchen</h2>
        <form class="form-group" v-on:submit.prevent="addDocument">
            <input v-model="line1" type="text" />
            <p class="error">{{errorMsg1}}</p>
            <input v-model="line2" type="text" />
            <p class="error">{{errorMsg2}}</p>
            <input v-model="line3" type="text" />
            <p class="error">{{errorMsg3}}</p>
            <input v-model="line4" type="text" />
            <p class="error">{{errorMsg4}}</p>
            <input v-model="line5" type="text" />
            <p class="error">{{errorMsg5}}</p>
            <button type="submit">Send Elfchen</button>
        </form>
    </div>
</div>
</template>

<script>
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { db, auth } from '@/firebase';

    export default {
        name: 'Verses',
        emits: [ 
        'update:line1', 
        'update:line2',
        'update:line3',
        'update:line4',
        'update:line5',],
        data() {
            return {
                type: "Elfchen",
                errorMsg1: '',
                errorMsg2: '',
                errorMsg3: '',
                errorMsg4: '',
                errorMsg5: '',
            };
        },
        computed: {
            line1: {
                get() {
                    return this.$store.state.elfchen.line1;
                },
                set(value) {
                    this.$store.dispatch('setElfchen', {line1: value})
                }
            },
            line2: {
                get() {
                    return this.$store.state.elfchen.line2;
                },
                set(value) {
                    this.$store.dispatch('setElfchen', {line2: value})
                }
            },
            line3: {
                get() {
                    return this.$store.state.elfchen.line3;
                },
                set(value) {
                    this.$store.dispatch('setElfchen', {line3: value})
                }
            },
            line4: {
                get() {
                    return this.$store.state.elfchen.line4;
                },
                set(value) {
                    this.$store.dispatch('setElfchen', {line4: value})
                }
            },
            line5: {
                get() {
                    return this.$store.state.elfchen.line5;
                },
                set(value) {
                    this.$store.dispatch('setElfchen', {line5: value})
                }
            }
        },
        methods: {
            checkForm() {
                let isValid = true;
                let errorMsg1 = '';
                let errorMsg2 = '';
                let errorMsg3 = '';
                let errorMsg4 = '';
                let errorMsg5 = '';
                if (this.$store.state.elfchen.line1.trim().split(' ').length != 1 || this.line1 === '') {
                    errorMsg1 = 'Write exactly one word';
                    isValid = false
                }
                if (this.$store.state.elfchen.line2.trim().split(' ').length != 2) {
                    errorMsg2 = 'Write exactly two words';
                    isValid = false
                }
                if (this.$store.state.elfchen.line3.trim().split(' ').length != 3) {
                    errorMsg3 = 'Write exactly three words';
                    isValid = false
                }
                if (this.$store.state.elfchen.line4.trim().split(' ').length != 4) {
                    errorMsg4 = 'Write exactly four words';
                    isValid = false
                }
                if (this.$store.state.elfchen.line5.trim().split(' ').length > 1 || this.line5 === '') {
                    errorMsg5 = 'Write exactly one word';
                    isValid = false
                } 
                this.errorMsg1 = errorMsg1;
                this.errorMsg2 = errorMsg2;
                this.errorMsg3 = errorMsg3;
                this.errorMsg4 = errorMsg4;
                this.errorMsg5 = errorMsg5;
                return isValid
            },
            async addDocument() {
                if(this.checkForm()) {
                const docData = {
                id: uuidv4(),
                line1: this.$store.state.elfchen.line1.split(' '),
                line2: this.$store.state.elfchen.line2.split(' '),
                line3: this.$store.state.elfchen.line3.split(' '),
                line4: this.$store.state.elfchen.line4.split(' '),
                line5: this.$store.state.elfchen.line5.split(' '),
                type: this.type,
                created: Timestamp.fromDate(new Date()),
                creator: auth.currentUser.uid,
            };  console.log(docData);
                const docRef = await addDoc(collection(db, "Verses"), docData );
                console.log("Document written with ID: ", docRef.id);
                this.$store.dispatch('resetElfchen');
                this.$store.dispatch('setModalClosed');
                }
            },
            closeModal() {
                this.$store.dispatch('setModalClosed');
            },
        }
    }
</script>

<style lang="scss" scoped>

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 1;


    .modal {
        background: #FBF6EF;
        width: 25rem;
        padding: 0 0 2rem 0;
        margin: 8rem auto auto auto;
        border-top: 5px solid;
        border-image: linear-gradient(90deg, #7400b8, #80ffdb) 1;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 4px 7px 17px -1px #B0B0B0;
        display: flex;
        flex-direction: column;

        h2 {
            text-align: center;
        }

        @media(max-width: 500px ) {
        width: initial;
        margin: auto;
    }

        .close-btn {
            border: none;
            background: none;
            align-self: flex-end;
            padding: 0.5rem;
            cursor: pointer;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            align-items: center;

            input {
                padding: 0.5rem;
                margin-bottom: 0.5rem;
                border: 1px solid lightgrey;
                border-radius: 5px;
                background: #FBF6EF;

                &:first-of-type {
                    width: 20%;
                }
                &:nth-of-type(2) {
                    width: 40%;
                }
                &:nth-of-type(3) {
                    width: 60%;
                }
                &:nth-of-type(4) {
                    width: 80%;
                }
                &:nth-of-type(5) {
                    width: 20%;
                }
            }

            .error {
                margin: 0;
                color: blue;
                font-size: 0.75rem;
                margin-bottom: 0.5rem;
            }

            > button {
                border: none;
                padding: 1rem;
                margin-top: 1rem;
                border-radius: 9999px;
                background: #5e60ce;
                box-shadow: 4px 7px 17px -1px #B0B0B0;
                cursor: pointer;
                color: white;
                font-weight: bold;

                &:hover {
                    background: #3a3b8f;
                }
            }
        }
    }
}

</style>