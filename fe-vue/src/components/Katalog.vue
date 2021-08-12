<template>
    <div class="container mt-3 w 75">
        <h1>Selamat datang di toko kami!</h1>
        <div id="katalogBuku">
            <h2 class="mt-5">Katalog Buku</h2>
            <hr />
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th>Harga</th>
                        <th>Stok</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in bookList" :key="index">
                        <td> {{ index + 1 }} </td>
                        <td> {{ book.judul }} </td>
                        <td> {{ book.pengarang }} </td>
                        <td> {{ book.harga }} </td>
                        <td> {{ book.stok }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ["bookList"]
};
</script>

<style>
h1 {
    text-align: center
}
</style>