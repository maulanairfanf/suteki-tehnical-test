<template>
	<nav class="navbar container">
		<div class="navbar-logo">
			<img src="@/assets/images/logo.png" alt="Logo" />
		</div>
		<div class="search-collapse" id="desktop-navbar">
			<img src="@/assets/images/search-icon.png" alt="Search Icon" />
			<input
				type="text"
				placeholder="Cari kampus/prodi impian Anda disini..."
			/>
			<button class="button">Cari</button>
		</div>
		<div class="navbar-actions" id="desktop-navbar">
			<button class="button-outline">Daftar</button>
			<button class="button">Login</button>
		</div>
		<!-- Hamburger menu icon -->
		<div class="hamburger-menu" @click="toggleMenu">
			<div class="bar"></div>
			<div class="bar"></div>
			<div class="bar"></div>
		</div>
		<!-- Hidden menu for mobile -->
		<div class="mobile-menu" v-if="isMenuOpen">
			<div class="search-collapse">
				<img src="@/assets/images/search-icon.png" alt="Search Icon" />
				<input
					type="text"
					placeholder="Cari kampus/prodi impian Anda disini..."
				/>
				<button class="button">Cari</button>
			</div>
			<div class="navbar-actions">
				<button class="button-outline">Daftar</button>
				<button class="button">Login</button>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value
}
</script>
