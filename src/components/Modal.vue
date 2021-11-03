<template>
<div class="modal-container">
    <div class="modal">
        <button class="close-btn" v-on:click="$emit('close')">
            <img src="../assets/icons/x.svg" alt="Bootstrap" width="32" height="32">
        </button>
        <h2>Schreibe ein Elfchen</h2>
        <form class="form-group" v-on:submit.prevent="$emit('addDoc')">
            <input @input="$emit('update:line1', $event.target.value)" :value="line1" type="text" />
            <input @input="$emit('update:line2', $event.target.value)" :value="line2" type="text" />
            <input @input="$emit('update:line3', $event.target.value)" :value="line3" type="text" />
            <input @input="$emit('update:line4', $event.target.value)" :value="line4" type="text" />
            <input @input="$emit('update:line5', $event.target.value)" :value="line5" type="text" />
            <button type="submit">Send Elfchen</button>
        </form>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Verses',
        emits: ['close', 
        'update:line1', 
        'update:line2',
        'update:line3',
        'update:line4',
        'update:line5',
        'addDoc',],
        props: {
            line1: String,
            line2: String,
            line3: String,
            line4: String,
            line5: String,
        },
        data() {
            return {
                type: "Elfchen",
            };
        },
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
        width: 25rem;
        aspect-ratio: 2 / 1;
        background: #FBF6EF;
        margin: 4rem auto;
        padding: 0 0 2rem 0;
        border-top: 5px solid;
        border-image: linear-gradient(90deg, blue, red) 1;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 4px 7px 17px -1px #B0B0B0;
        display: flex;
        flex-direction: column;

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

                &:first-child {
                    width: 20%;
                }
                &:nth-child(2) {
                    width: 40%;
                }
                &:nth-child(3) {
                    width: 60%;
                }
                &:nth-child(4) {
                    width: 40%;
                }
                &:nth-child(5) {
                    width: 20%;
                }
            }
            button {
                border: none;
                padding: 1rem;
                margin-top: 1rem;
                border-radius: 9999px;
                background: blue;
                box-shadow: 4px 7px 17px -1px #B0B0B0;
                cursor: pointer;
                color: white;
                font-weight: bold;
            }
        }
    }
}

</style>