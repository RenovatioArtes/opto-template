<template lang="pug">
  #app-title
    slot(name="icon")
    slot(name="name")

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#app-title {
  display: flex;
  align-items: center;
  column-gap: 1rem;

  width: 18rem;
  height: 8rem;
  padding: 1rem 1rem;
  background-color: white;
  position: relative;

  border: 0px solid black;
  border-radius: 10px;
  border: solid 1px rgba(141, 141, 141, 0.1);
  box-shadow: 0px 10px 0px 0px rgba(141, 141, 141, 0.1);

  color: #1bffb8;
  transition: box-shadow 0.1s ease-in-out, top 1s ease-in-out;
  i {
    flex: 2;
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
    font-size: 1.5rem;
    text-align: center;
    font-family: Montebello;
    letter-spacing: 2px;
  }
}

#app-title:hover {
  box-shadow: inset 0px 2px 0px 1px lightgray;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  top: 8px;
  border: solid 1px rgba(141, 141, 141, 0.2);
}
</style>
