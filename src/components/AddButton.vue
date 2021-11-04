<template>
    <div class="btn-container">
        <button v-on:click="$emit('open')" class="add-btn">
            <img src="../assets/icons/vector-pen.svg" alt="Bootstrap" width="32" height="32">
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        emits: ['open'],
    }
</script>

<style lang="scss" scoped>

.btn-container {
    position: sticky;
    bottom: 0;
    padding: 2rem;
    display: flex;
    justify-content: flex-start;

    .add-btn {
        border: none;
        padding: 1rem;
        border-radius: 9999px;
        background: blue;
        box-shadow: 4px 7px 17px -1px #B0B0B0;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
            transition: transform 0.3s ease-in-out;
        }
    }
}



</style>