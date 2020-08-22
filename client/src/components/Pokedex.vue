<template>
    <div class="pokedex">
        <div class="left-panel">
            <div class="top-bar">
                <div class="upper-curve"></div>
                <div class="lower-curve"></div>
                <div class="square"></div>
                <div class="main-lens lens blue-lens"></div>
                <div class="lights">
                    <div class="lens red-lens"></div>
                    <div class="lens yellow-lens"></div>
                    <div class="lens green-lens"></div>
                </div>
            </div>
        </div>
        <div class="biding">

        </div>
        <div class="right-panel">

        </div>
    </div>
</template>

<script>
export default {
    name: 'pokedex'   
}
</script>

<style scoped>
.pokedex {
    --bg-main-color: #CA215B;
    --bg-secondary-color: #DF1A55;
    --shadow-color: #471557;
    margin: 0 3em;
}

.left-panel {
    z-index: 1;
    background-color: var(--bg-main-color);
    width: 500px;
    height: 700px;
    border-radius: 30px 3px 3px 30px;
    position: relative;
    box-shadow: 0 20px 0 0 var(--shadow-color);
    overflow: hidden;
}

.top-bar {
    z-index: 2;
    background-color: var(--bg-secondary-color);
    top: 0;
    left: 0;
    height: 175px;
    width: 100%;
    position: absolute;
}

.lower-curve {
    z-index: 3;
    position: absolute;
    top: 75px;
    left: 0;
    background-color: inherit;
    width: 215px;
    height: 100px;
    box-shadow: -10px 20px 0 0 var(--shadow-color);
    border-radius: 0 0 90px 0;
}

.upper-curve {
    z-index: 3;
    position: absolute;
    top: 75px;
    right: 0;
    width: 236px;
    height: 100px;
    border-radius: 20px 0 0 0;
    box-shadow: 0 24px 0 0 inset var(--shadow-color);
    background-color: var(--bg-main-color);
}

.square {
    z-index: 4;
    background: linear-gradient(145deg,
        transparent 50%,
        var(--shadow-color) 50.5%,
        var(--shadow-color) 62.5%,
        var(--bg-main-color) 63%
    );
    border-radius: 0 30px 0 0;
    position: absolute;
    top: 75px;
    left: 130px;
    width: 150px;
    height: 100px;
}

.lens {
    position: absolute;
    border-radius: 90px;
    background: radial-gradient(circle, #fcfcfc 0%, var(--lens-color) 75%);
}

.main-lens {
    z-index: 5;
    border: 15px solid #fcfcfc;
    height: 120px;
    width: 120px;
    left: 20px;
    top: 20px;
    box-shadow: -13px -13px 0 0 inset rgba(100, 100, 100, 0.2),
        0 0 0 3px inset #2f2f3f,
        4px 6px 0 0 var(--shadow-color);
    background-position: -10px -10px;
}

.lights {
    position: absolute;
    top: 20px;
    left: 150px;
}

.lights .lens {
    border: 6px solid #2f2f3f;
    height: 35px;
    width: 35px;
    background-position: -3px -3px;
    box-shadow: -5px -5px 0 0 inset rgba(100, 100, 100, 0.2);
}

.lights .yellow-lens {
    left: 40px;
}

.lights .green-lens {
    left: 80px;
}

.blue-lens {
    --lens-color: rgb(30, 226, 226);
}

.red-lens {
    --lens-color: rgb(255, 0, 0);
}

.yellow-lens {
    --lens-color: rgb(253, 253, 0);
}

.green-lens {
    --lens-color: rgb(30, 226, 63);
}
</style>
