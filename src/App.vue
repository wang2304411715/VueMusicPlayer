<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
  	return {
  		
  	}
  }
}
</script>

<style>

* {
	margin: 0;
	padding: 0;
	font-family: Arial, "微软雅黑";
	user-select: none;
}

img {
	max-width: 100%;
	vertical-align: middle;
	border: none;
}

body,
p,
form,
input,
button,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6 { 
	list-style: none;
	overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: 100%;
}

input,
textarea {
	user-select: text;
}

input,
select,
textarea {
	outline: none;
	border: none;
	background: none;
}

a {
	color: #222;
	text-decoration: none;
}

a:hover {
	color: #f00;
	text-decoration: none;
}

em,
i {
	font-style: normal;
}

html {
	font-size: 10px;
}

body { 
	margin: 0 auto;
	max-width: 640px; 
	min-width: 320px;
	height: 100%;
	color: #555;
	background: #f9f9f9;
}

.clearfix::after {
	content: "";
	clear: both;
	height: 0;
	font-size: 0;
	line-height: 0;
	visibility: hidden; 
	overflow: hidden;
}

.fl {
	float: left;
}

.fr {
	float: right;
}

.active {
  color: red;
}

</style>