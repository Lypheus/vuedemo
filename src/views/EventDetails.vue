<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  data() {
    return {
      event: null,
      id: 5928102,
    };
  },
  created() {
    EventService.getEventById(this.id)
      .then((r) => {
        this.event = r.data;
      })
      .catch((e) => {
        console.log("Oops: %s", e);
      });
  },
};
</script>

<style></style>
