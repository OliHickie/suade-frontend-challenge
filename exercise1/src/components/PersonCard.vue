<template>
  <div class="details" @click="$emit('personClick', person)">
    <h4> {{ person.name }} </h4>
    <b>Age:</b> {{ person.age }} <br/>
    <b>Eye Color:</b> {{ person.eyeColour }} <br/>
    <b>Gender:</b> {{ person.gender }} <br/>
  </div>
</template>

<script>
  export default {
    name: 'PersonCard',
    emits: ['personClick'],
    props: {
      person: {
        type: Object,
        default: () => ({}),
      },
    },
  };
</script>

<style scoped lang="scss">

.details {
  background: #e4e4e4;
  min-width: 100px;
  float: left;
  width: 300px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  & h4 {
    margin: 0;
  }
}

</style>
