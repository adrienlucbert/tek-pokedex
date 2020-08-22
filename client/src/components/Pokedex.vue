<template>
    <div class="pokedex">
        <div class="left-panel">
            <div class="top-bar">
                <div class="upper-curve"></div>
                <div class="lower-curve"></div>
                <div class="square"></div>
                <div class="main-lens lens blue-lens"></div>
                <div class="lenses">
                    <div class="lens red-lens"></div>
                    <div class="lens yellow-lens"></div>
                    <div class="lens green-lens"></div>
                </div>
            </div>
            <div class="wide-screen">
                <div class="lights">
                    <div class="light"></div>
                    <div class="light"></div>
                </div>
                <div class="screen blue-screen">
                </div>
                <div class="circle-button"></div>
                <div class="speakers"></div>
            </div>
            <div class="bottom-part">
                <div class="circle-button"></div>
                <div class="bar-buttons">
                    <div class="bar-button green-button"></div>
                    <div class="bar-button red-button"></div>
                </div>
                <div class="rect-button"></div>
                <div class="cross-button">
                    <div class="arrow up-arrow"></div>
                    <div class="arrow left-arrow"></div>
                    <div class="middle-circle"></div>
                    <div class="arrow down-arrow"></div>
                    <div class="arrow right-arrow"></div>
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

<style lang="scss" scoped>
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

    .lens {
        position: absolute;
        border-radius: 90px;
        background: radial-gradient(circle, #fcfcfc 0%, var(--lens-color) 75%);
    }

    .top-bar {
        z-index: 2;
        background-color: var(--bg-secondary-color);
        top: 0;
        left: 0;
        height: 175px;
        width: 100%;
        position: absolute;

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

        .lenses {
            position: absolute;
            top: 20px;
            left: 150px;

            .lens {
                border: 6px solid #2f2f3f;
                height: 35px;
                width: 35px;
                background-position: -3px -3px;
                box-shadow: -5px -5px 0 0 inset rgba(100, 100, 100, 0.2);
            }

            .yellow-lens {
                left: 40px;
            }

            .green-lens {
                left: 80px;
            }
        }
    }

    .blue-screen {
        background-color: #95ffff;
    }

    .wide-screen {
        position: absolute;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 5px 10px 0 0 var(--shadow-color);
        border-radius: 15px;
        width: 400px;
        height: 300px;
        background-color: #fcfcfc;

        .lights {
            position: absolute;
            top: 11px;
            left: 50%;
            height: 10px;
            transform: translate(-50%, -50%);

            .light {
                position: absolute;
                left: 0;
                top: 0;
                width: 11px;
                height: 11px;
                border-radius: 90px;
                background: var(--bg-secondary-color);
                border: 3px solid #2f2f3f;
            }

            .light:first-of-type {
                left: -10px;
            }

            .light:last-of-type {
                left: 10px;
            }
        }

        .screen {
            position: absolute;
            left: 22px;
            top: 22px;
            border-radius: 5px;
            width: calc(100% - (22px * 2));
            height: calc(100% - (22px * 2) - 50px);
            box-shadow: 0 15px 0 0 inset rgba(100, 100, 100, .2);
        }

        .circle-button {
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 90px;
            background: var(--bg-secondary-color);
            border: 5px solid #2f2f3f;
            left: calc(22px + 25px);
            bottom: 11px;
        }

        .speakers {
            position: absolute;
            right: 22px;
            bottom: 11px;
            width: 180px;
            height: 8px;
            border-radius: 90px;
            background: #2f2f3f;
            box-shadow: 0 calc(-50px / 2 + 6px) 0 0 #2f2f3f,
                0 calc(-50px + 12px) 0 0 #2f2f3f;
        }
    }

    .bottom-part {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        height: 120px;

        .circle-button {
            position: absolute;
            background: #00AAF7;
            height: 55px;
            width: 55px;
            top: 0;
            left: 0;
            border-radius: 90px;
            box-shadow: 2px 4px 0 0 var(--shadow-color);
        }

        .bar-buttons {
            position: absolute;
            left: 100px;
            top: 20px;

            .green-button {
                background: rgb(30, 226, 63);
            }

            .red-button {
                background: #ff7600;
            }
            
            .bar-button {
                position: absolute;
                width: 55px;
                height: 11px;
                border-radius: 90px;
                box-shadow: 2px 4px 0 0 var(--shadow-color);
            }

            .bar-button:last-of-type {
                left: 70px;
            }
        }

        .rect-button {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200px;
            height: 42px;
            border-radius: 8px;
            background-color: #ffff5c;
        }

        .cross-button {
            position: absolute;
            right: 20px;
            bottom: 0;

            > div {
                background: #000850;
                position: absolute;
                width: 30px;
                height: 30px;
                box-shadow: 2px 4px 0 0 var(--shadow-color);
            }

            .middle-circle {
                bottom: 30px;
                right: 30px;
            }

            .middle-circle::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 9px;
                height: 9px;
                border-radius: 90px;
                background: #2f2f3f;
            }

            .arrow::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 0;
                height: 0;
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                border-left: 9px solid #2f2f3f;
            }

            .left-arrow::after {
                transform: translate(-50%, -50%) rotate(180deg);
            }

            .left-arrow {
                right: 60px;
                bottom: 30px;
                border-radius: 5px 0 0 5px;
            }

            .right-arrow {
                right: 0;
                bottom: 30px;
                border-radius: 0 5px 5px 0;
            }

            .down-arrow {
                right: 30px;
                bottom: 0;
                border-radius: 0 0 5px 5px;
            }

            .down-arrow::after {
                transform: translate(-50%, -50%) rotate(90deg);
            }

            .up-arrow {
                right: 30px;
                bottom: 60px;
                border-radius: 5px 5px 0 0;
            }

            .up-arrow::after {
                transform: translate(-50%, -50%) rotate(-90deg);
            }

        }
    }
}

</style>
