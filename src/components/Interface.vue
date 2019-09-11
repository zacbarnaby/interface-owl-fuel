<template>
  <div id="interface">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col">
          <div class="block">
            <div class="row p-1">
              <div class="col">
                <div class="number">
                  <div class="row">
                    <div class="col">
                      <div class="currency value">$</div>
                    </div>
                    <div class="col">
                      <div class="value">
                        <div class="value">15.32</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row p-1">
              <div class="col">
                <div class="number">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="galons value">GALONS</div>
                    </div>
                    <div class="col">
                      <div class="value">2.32</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="block">
            <div class="row no-gutters">
              <div class="col p-1">
                <div class="action fill">$40</div>
              </div>
              <div class="col p-1">
                <div class="action fill">$20</div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col p-1">
                <div class="action fill">$10</div>
              </div>
              <div class="col p-1">
                <div class="action fill">$5</div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col p-1">
                <div class="action fill">Fill</div>
              </div>
              <div class="col p-1">
                <div class="action fill">Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'interface',
  components: {
    
  },
  data() {
    
  },
  methods: {

  }
}
</script>

<style lang="scss">
  #interface {
    height: 100vh;

    .container {
      width: 700px;
    }

    .block {
      background: rgba(255, 255, 255, 0.2);
      padding: 5px;

      .number {
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        padding: 5px;

        font-family: 'Orbitron', sans-serif;

        .currency, .galons {
          &.value {
            text-align: left;
            padding-left: 5px;
            color: #ffffffb5;
          }
        }

        .galons {
          &.value {
            font-size: 30px;
          }
        }

        .value {
          font-size: 40px;
          color: white;
          text-align: right;
          padding-right: 5px;
        }
      }

      .action {
        background: #0099ff;
        text-align: center;
        color: white;
        padding: 7px;
        cursor: pointer;
        border: 2px solid #0099ff;
        font-family: 'Roboto', sans-serif;
        transition: all 40ms ease-in-out;

        &:hover {
          background: none;
          border-color: white;
        }
      }
    }
  }
</style>