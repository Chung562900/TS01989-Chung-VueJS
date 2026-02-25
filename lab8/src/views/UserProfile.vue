<template>
  <div class="container mt-5">
    <h2>User Profile</h2>

    <router-link to="/profile/info" class="btn btn-primary me-2">
      Info
    </router-link>

    <router-link to="/profile/settings" class="btn btn-secondary">
      Settings
    </router-link>

    <router-view />
  </div>
</template>
