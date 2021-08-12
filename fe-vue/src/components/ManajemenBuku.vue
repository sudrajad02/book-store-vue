<template>
    <div>
        <h1 class="text-center">Manajemen Buku</h1>

        <div id="formTambah" v-if="formMode == 'create'">
            <h5>Tambah Buku</h5>
            <hr />
            <form class="form-row" @submit.prevent="submitAdd">
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Judul" v-model="newBook.judul">
                </div>
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Pengarang" v-model="newBook.pengarang">
                </div>
                <div class="col-2">
                    <input type="text" class="form-control mx-2" placeholder="Harga" v-model="newBook.harga">
                </div>
                <div class="col-2">
                    <input type="number" class="form-control mx-2" placeholder="Stok" v-model="newBook.stok">
                </div>
                <div class="col-2">
                    <input type="submit" class="btn btn-primary ml-5" value="Simpan">
                </div>
            </form>
        </div>

        <div id="formUbah" v-if="formMode == 'edit'">
            <h5>Ubah Buku</h5>
            <hr />
            <form class="form-row" @submit.prevent="submitChange">
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Judul" v-model="updatedBook.judul">
                </div>
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Pengarang" v-model="updatedBook.pengarang">
                </div>
                <div  class="col-2">
                    <input type="text" class="form-control mx-2" placeholder="Harga" v-model="updatedBook.harga">
                </div>
                <div class="col-2">
                    <input type="number" class="form-control mx-2" placeholder="Stok" v-model="updatedBook.stok">
                </div>
                <div class="col-2">
                    <input type="submit" class="btn btn-warning ml-5" value="Ubah">
                </div>
            </form>
        </div>

        <div id="daftarBuku">
            <h2 class="mt-3">Daftar Buku</h2>
            <hr />
            <button @click="formMode = 'create'" class="btn btn-primary m-2">
                Tambah Buku
            </button>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in bookList" :key="index">
                        <td> {{ index + 1 }} </td>
                        <td> {{ book.judul }} </td>
                        <td> {{ book.pengarang }} </td>
                        <td> {{ book.harga }} </td>
                        <td> {{ book.stok }} </td>
                        <td>
                            <button @click="showEdit(book, index)" class="btn btn-info mr-3">Edit</button>       
                            <button class="btn btn-danger" @click="deleteBook(book, index)">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ["bookList"],
    methods: {
        submitAdd() {
            const bookCreated = {
                judul: this.newBook.judul,
                pengarang: this.newBook.pengarang,
                harga: this.newBook.harga,
                stok: this.newBook.stok,
            };

            this.$emit("store", bookCreated);
            this.newBook.judul = "";
            this.newBook.pengarang = "";
            this.newBook.harga = "";
            this.newBook.stok = "";
        },

        showEdit(book, index) {
            this.formMode = "edit";
            this.bookIndex = index;

            this.updatedBook._id = book._id;
            this.updatedBook.judul = book.judul;
            this.updatedBook.pengarang = book.pengarang;
            this.updatedBook.harga = book.harga;
            this.updatedBook.stok = book.stok;
        },

        submitChange() {
            const bookChange = this.updatedBook;

            this.$emit("update", bookChange, this.bookIndex);
            // this.newBook.judul = "";
            // this.newBook.pengarang = "";
            // this.newBook.harga = "";
            // this.newBook.stok = "";
            this.formMode = "";
        },

        deleteBook(book, index) {
            this.$emit("delete", book, index)
        }
    },
    data() {
        return {
            formMode: "",
            bookIndex: "",
            updatedBook: {
                _id: "",
                judul: "",
                pengarang: "",
                harga: "",
                stok: "",
            },
            newBook: {
                judul: "",
                pengarang: "",
                harga: "",
                stok: "",
            }
        }
    }
};
</script>

<style>

</style>
