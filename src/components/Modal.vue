<template>
<div class="modal-container">
    <div class="modal">
        <button class="close-btn" v-on:click="$emit('close')">
            <img src="../assets/icons/x.svg" alt="Bootstrap" width="32" height="32">
        </button>
        <h2>Schreibe ein Elfchen</h2>
        <form class="form-group" v-on:submit.prevent="$emit('addDoc', checkForm())">
            <input @input="$emit('update:line1', $event.target.value)" :value="line1" type="text" />
            <p class="error">{{errorMsg1}}</p>
            <input @input="$emit('update:line2', $event.target.value)" :value="line2" type="text" />
            <p class="error">{{errorMsg2}}</p>
            <input @input="$emit('update:line3', $event.target.value)" :value="line3" type="text" />
            <p class="error">{{errorMsg3}}</p>
            <input @input="$emit('update:line4', $event.target.value)" :value="line4" type="text" />
            <p class="error">{{errorMsg4}}</p>
            <input @input="$emit('update:line5', $event.target.value)" :value="line5" type="text" />
            <p class="error">{{errorMsg5}}</p>
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
                errorMsg1: '',
                errorMsg2: '',
                errorMsg3: '',
                errorMsg4: '',
                errorMsg5: '',
            };
        },
        methods: {
            checkForm() {
                let isValid = true;
                let errorMsg1 = '';
                let errorMsg2 = '';
                let errorMsg3 = '';
                let errorMsg4 = '';
                let errorMsg5 = '';
                if (this.line1.split(' ').length != 1 || this.line1 === '') {
                    errorMsg1 = 'Write exactly one word';
                    isValid = false
                }
                if (this.line2.split(' ').length != 2) {
                    errorMsg2 = 'Write exactly two words';
                    isValid = false
                }
                if (this.line3.split(' ').length != 3) {
                    errorMsg3 = 'Write exactly three words';
                    isValid = false
                }
                if (this.line4.split(' ').length != 4) {
                    errorMsg4 = 'Write exactly four words';
                    isValid = false
                }
                if (this.line5.split(' ').length > 1 || this.line5 === '') {
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