<template lang="pug">
  button(class="large-button")
    slot(name="icon")
    slot(name="name")
</template>

<script>
export default {
  name: "AppButton",
  props: ["icon", "name", "small", "large"],
  data() {
    return {
      // theRouterName: this.routerName
      data() {
        return {
          small: "small-button",
          large: "large-button"
        };
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Montebello;
  src: url("../../assets/fonts/Montebello-Rounded.woff");
}

.large-button {
  display: flex;
  align-items: center;
  column-gap: 1rem;

  width: 18rem;
  height: 6rem;
  padding-right: 1rem;
  background-color: white;

  border: 0px solid black;
  border-radius: 10px;
  border: solid 1px rgba(141, 141, 141, 0.2);

  color: #1bffb8;
  transition: background-color 0.5s ease-in-out;
  i {
    flex: 2;
    justify-self: flex-end;
    font-size: 2.5rem;
    color: #1bffb8;
    border-radius: 50px;
    background: #fbfbfb;
    padding: 20px;
    margin-left: 5px;
    margin-right: 5px;
    box-shadow: inset 0px 1px 1px 1px rgba(141, 141, 141, 0.1);
  }

  p {
    flex: 10;
    font-size: 1.2rem;
    text-align: left;
    font-family: Montebello;
    letter-spacing: 2px;
  }
}

.small-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  width: 18rem;
  height: 12rem;
  padding: 20px 10px;
  background-color: white;

  border: 0px solid black;
  border-radius: 10px;
  border: solid 1px rgba(141, 141, 141, 0.2);

  color: #1bffb8;
  transition: background-color 0.5s ease-in-out;
  i {
    font-size: 3rem;
    color: #1bffb8;
    background-color: #fbfbfb;

    padding: 20px;
    margin-left: 5px;
    margin-right: 5px;

    border-radius: 50px;
    box-shadow: inset 0px 1px 1px 1px rgba(141, 141, 141, 0.1);
  }

  p {
    font-size: 1rem;
    text-align: center;
  }
}

button:hover {
  box-shadow: inset 0px 1px 0px 1px rgba(141, 141, 141, 0.1);
  outline-style: none;
  background-color: lightgreen;
  color: white;
}
</style>
