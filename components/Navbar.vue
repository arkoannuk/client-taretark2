<script setup lang="ts">
function closeAllDetails() {
  const detailsElements = document.querySelectorAll("details")
  detailsElements.forEach((element) => {
    element.open = false
  })
}
function removeFocus(e: any) {
  e.target.blur()
}
</script>

<template>
  <div class="navbar bg-base-100 sticky top-0 shadow text-base-content " style="z-index: 9999;">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/" @click="closeAllDetails">
        Purde Puhkemajad
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NuxtLink to="/booking" @click="removeFocus">
              Broneeri
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rooms/holiday-home" @click="removeFocus">
              Ruumid
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="removeFocus">
              Meist
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" @click="removeFocus">
              Blogi
            </NuxtLink>
          </li>
        </ul>
      </div>
      <details class="dropdown dropdown-end">
        <summary tabindex="0" class="btn btn-ghost">
          🇪🇪
        </summary>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-max">
          <li><a @click="closeAllDetails">🇪🇪 Eesti</a></li>
          <li><a @click="closeAllDetails">🇬🇧 English</a></li>
        </ul>
      </details>
      <details class="dropdown dropdown-end">
        <summary tabindex="0" class="btn btn-ghost md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </summary>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-max">
          <li>
            <NuxtLink to="/booking" @click="closeAllDetails">
              🗓 Broneeri
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rooms/holiday-home" @click="closeAllDetails">
              🏠 Ruumid
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="closeAllDetails">
              🧑🏻 Meist
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" @click="closeAllDetails">
              📕 Blogi
            </NuxtLink>
          </li>
        </ul>
      </details>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: hsl(var(--p));
}
</style>
