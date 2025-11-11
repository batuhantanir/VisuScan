<template>
  <v-container class="text-center py-12 flex-grow-1 height-auto">
    <v-row justify="center" class="ga-4">
      <v-col cols="12" class="d-flex flex-column align-center">
        <v-icon size="96" color="indigo-lighten-1"
          >mdi-alert-circle-outline</v-icon
        >
        <h1 class="display-1 font-weight-bold">404</h1>
        <h2 class="headline">Page Not Found</h2>
        <p class="subtitle-1">
          The page you are looking for does not exist or has been moved.
        </p>
        <v-btn color="indigo" class="mt-4" to="/">Go to Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
