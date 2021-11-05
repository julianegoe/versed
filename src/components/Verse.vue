<template>
    <div class="verse-container">
        <div class="verse">
            <template v-for="word, index in verse.line1" :key="index"></template>
            <div>
                <span class="word" v-for="word, index in verse.line1" :key="index">{{word}} </span>
            </div>
            <div>
                <span class="word" v-for="word, index in verse.line2" :key="index">{{word}} </span>
            </div>
            <div>
                <span class="word" v-for="word, index in verse.line3" :key="index">{{word}} </span>
            </div>
            <div>
                <span class="word" v-for="word, index in verse.line4" :key="index">{{word}} </span>
            </div>
            <div>
                <span class="word" v-for="word, index in verse.line5" :key="index">{{word}} </span>
            </div>
        </div>
        <div class="metadata">
            <div class="metadata__type">
                {{verse.type}}
            </div>
            <div class="metadata__user">
                <div>Placeholder for Username</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            verse: {
                type: Object,
                required: false,
            }
        },
    }
</script>

<style lang="scss" scoped>

.verse-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 30rem;
    aspect-ratio: 2 / 1;
    border-top: 5px solid;
    border-bottom: none;
    border-left: none;
    border-right: none;
    border-image: linear-gradient(90deg, blue, red) 1;
    background: #FBF6EF;
    box-shadow: 4px 7px 17px -1px #B0B0B0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    @media(max-width: 500px ) {
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        aspect-ratio: initial;
        box-shadow: none;
    }


    .verse {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0.5rem 2rem 1rem 2rem;
        margin: 1rem 0 1rem 0;
        border-right: 1px solid lightgray;

        @media(max-width: 500px ) {
        border-right: none;
        margin: 0;
        padding: 1rem 0 0 0;
    }


        .word {
            padding-right: 0.5rem;
        }
    }

    .metadata {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 2rem 1rem 2rem;
        margin: 1rem 0 1rem 0;

        @media(max-width: 500px ) {
        margin: 0;
    }

        .metadata__type {
            width: 5rem;
            aspect-ratio: 4 / 3;
            background: white;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: flex-end;
            font-weight: bold;
            
            @media(max-width: 500px ) {
            display: none;
    }

        }
    }
}


</style>