import { reactive, defineComponent } from "vue";
import ImgFile from "@/components/ImgFile.vue"

export default defineComponent({
  props: {
    types: {
      type: Number
    }
  },
  setup(props) {
    const sprint = () => (
      <>
        <p>PO:</p>
        <div class="overflow-hidden">
          <div class="dialog-text">
            <p class="mb-[9vw]">
              產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召
              開短衝規劃會議(Sprint Planning)。
            </p>
            <p>
              短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
              Backlog），並由開發團隊在接下來的產品開發週期裡執行。
            </p>
          </div>
        </div>
      </>
    )
    const scrumMaster = () => (
      <>
        <p>Scrum Master (SM):</p>
        <div class="overflow-hidden">
          <div class="dialog-text">
            <p class="mb-[9vw]">
              嗨嗨~你是新來的吧！我是這次的 Scrum Master，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。
            </p>
            <p>
              這兩位是小斯和小廣，是我們開發團隊的成員唷～
            </p>
          </div>
        </div>
      </>
    )
    const sprintPoint = () => (
      <>
        <div class="scrum_master_text opacity-0">
          <p>Scrum Master (SM):</p>
          <div>
            <p>
              目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點左右。
            </p>
          </div>
        </div>
        <div class="dev1_text opacity-0">
          <p>Dev 小貓:</p>
          <div>
            <p>
            欸新來的，你應該不知道點數是什麼意思吧<br /> 哈哈～我來跟你科普一下吧～ Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
            </p>
          </div>
        </div>
        <div class="dev2_text opacity-0">
          <p>Dev 小熊:</p>
          <div>
            <p>
            沒錯，就如小貓姊說的！<br /> 我這已經把討論好的點數標上去囉～ 你來把任務排到短衝待辦清單吧！
            </p>
          </div>
        </div>
      </>
    )
    const factory = [
      sprint,
      scrumMaster,
      sprintPoint
    ]

    return () => factory[props.types]()
  },
});