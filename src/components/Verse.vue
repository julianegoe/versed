<template>
    <div class="verse-container">
        <div class ="verse-info">
            <div class="verse-type" :class="verse.type.toLowerCase()" />
            <div>{{verse.type}}</div>
        </div>
        <div class="verse">
            <template v-for="word, index in verse.line1" :key="index"></template>
            <div>
                <span class="word" v-for="word, index in verse.line1" :key="index">{{word}} </span>
            </div>
            <hr>
            <div>
                <span class="word" v-for="word, index in verse.line2" :key="index">{{word}} </span>
            </div>
            <hr>
            <div>
                <span class="word" v-for="word, index in verse.line3" :key="index">{{word}} </span>
            </div>
            <hr>
            <div>
                <span class="word" v-for="word, index in verse.line4" :key="index">{{word}} </span>
            </div>
            <hr>
            <div>
                <span class="word" v-for="word, index in verse.line5" :key="index">{{word}} </span>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import { auth } from '@/firebase';
import { onAuthStateChanged } from "firebase/auth";

    export default {
        name: 'Header',
        props: {
            verse: {
                type: Object,
                required: false,
            }
        },
        data() {
            return {
                displayName: '',
                photoURL: '',
            }
        },
        mounted() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    this.photoURL = user.photoURL;
                    this.displayName = user.displayName;
                } else {
                    this.$router.replace({name: 'Login'})
                }
            });
        },
    }
</script>

<style lang="scss" scoped>

hr {
    width: 100%;
    border: none;
    border-top: 1px solid lightgray;
    margin: 0.1rem;
}

.verse-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    aspect-ratio: 2 / 1;
    border-top: 5px solid;
    border-image: linear-gradient(90deg, #7400b8, #80ffdb) 1;
    background: #FBF6EF;
    box-shadow: 4px 7px 17px -1px #B0B0B0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    @media(max-width: 500px ) {
        width: 100%;
        flex-direction: column;
        aspect-ratio: initial;
        box-shadow: none;
    }

    .verse-info {
        align-self: flex-start;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem 1rem 0 1rem;

        .verse-type {
        aspect-ratio: 1;
        border-radius: 50%;
        width: 1rem;
        margin-right: 1rem;

        &.elfchen {
            background: #48bfe3;
        }
    }
    }


    .verse {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem 0 1rem 0;

        @media(max-width: 500px ) {
        margin: 0;
        padding-bottom: 1rem;
    }


        .word {
            padding-right: 0.5rem;
        }
    }
}


</style>