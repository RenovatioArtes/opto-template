<template lang="pug">
  header
    h1 Opto Math
    span(id="backgroundBtn")
      router-link(to='/')
        i(class="fas fa-home")
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
$header-title-color: #ff350c;
$header-button-color: #ff350c;
@font-face {
  font-family: Montebello;
  src: url("../../assets/fonts/Montebello-Rounded.woff");
  // C:\Users\vasga\Documents\OPTO\OptoDev\OptoMath\opto-math\src
}

header {
  display: flex;
  background: none;
  background-color: #fff;
  height: 4rem;
  width: 100%;
  align-items: center;
  box-shadow: 0px 3px 1px 0 rgba(211, 211, 211, 0.3);
  padding: 10px;
  h1 {
    flex: 10;
    font-size: clamp(2rem, 4vw, 4rem);
    color: $header-title-color;
    font-family: Montebello;
    margin-left: 1rem;
  }
  #backgroundBtn {
    display: flex;
    flex: 2;
    width: 100%;
    justify-content: center;
    i {
      position: relative;
      text-align: center;
      font-size: 2rem;
      color: $header-button-color;
      padding: 3px;
      box-shadow: 0px 1px 1px 0 lightgray;
      border-radius: 1px 5px 1px 3px;
      border: 0.5px solid lightgray;
      transition: box-shadow 0.1s ease-in, top 0.1s;
    }
    i:hover {
      box-shadow: 0px 1px 0px 1px lightgray;
      top: 1px;
    }
  }
}
</style>
