<template>
  <div class="onedot">
    <h2>Onedot构建任务</h2>
    <div>
      <div id="app"></div>
<!--      <form-create v-model="fApi" :rule="rule" :option="options"></form-create>-->
<!--      <form-create v-model="$f" :rule="rule"></form-create>-->
    </div>
  </div>
</template>
<!-- import form-create -->
<!--<script src="//unpkg.com/@form-create/element-ui/dist/form-create.min.js"></script>-->
<script>
export default {
  data () {
    return {
      //表单实例对象
      fApi:{},
      model: {},
      //表单生成规则
      rule:this.defaultRules(),
      options:{
        form: {
          hideRequiredAsterisk: false
        },
        //显示表单重置按钮
        resetBtn:true,
        //表单提交事件
        onSubmit:(formData)=>{
          alert(JSON.stringify(formData));
          // alert("这是最好的");
        },
        global:{
          //设置所有组件
          '*': {
            col: {
              span: 15
            },
            on:{
              change:()=>{
                alert(JSON.stringify(this.fApi.formData()))
              }
            }
          }

        }
      }
    }
  },
  mounted() {
    var jv = new jsonVue(this.mock())
    var vm = jv.mount('#app');
  },
  methods: {
    ifUtChange(){
      this.fApi.getRule('ut').props.disabled = !this.fApi.getRule('ut').props.disabled
    },
    mock(){
      return {
        rule:[
          {
            type:'ElButton',
            ref:'btn',
            props:{
              disabled:false
            },
            on:{
              click:()=>{
              this.disabled = true;
              }
            },
            children:['test']
          }
        ],
        mounted(){
          console.log(this.options)
        }
      };
    },
    defaultRules() {
      return [
        {
          type: 'input',
          field: 'step_name',
          title: '步骤名称',
          value: "Maven构建fsfaf",
          style: {
            float: 'left'
          },
          props: {
            "type": "text",
            "placeholder": "请输入步骤描述"
          },
          validate: [
            {required: true, message: '请输入步骤名称', trigger: 'blur'},
          ],
        },
        {
          type: 'input',
          field: 'step_description',
          title: '步骤描述',
          props: {
            "type": "textarea",
            "placeholder": "请输入步骤描述",
            "rows": 4
          },
          style: {
            float: 'left'
          }
        },
        {
          type: "select",
          field: "maven_version",
          title: "版本选择",
          value: ["maven3.6", "maven3.7"],
          options: [
            {"value": "maven3.6", "label": "maven3.6", "disabled": false},
            {"value": "maven3.7", "label": "maven3.7", "disabled": false},
          ],
          style: {
            float: 'left'
          },
          props: {}
        },
        {
          type: "radio",
          title: "是否执行单元测试",
          field: "if_ut",
          value: false,
          options: [
            {value: true, label: "是", disabled: false},
            {value: false, label: "否", disabled: false},
          ],
          style: {
            float: 'left'
          },
          // emit:['change'],
          // on:{
          //   change:()=>{
          //     // this.fApi.getRule('ut').props.disabled = !this.fApi.getRule('ut').props.disabled
          //     this.fApi.getRule('ut').hidden = !this.fApi.getRule('ut').hidden
          //   }
          // }
          control: [
            {
              value: true,
              rule: [
                {
                  type: 'datePicker',
                  field: 'ut',
                  title: '单元测试相关配置',
                  style: {
                    float: 'left'
                  },
                  // hidden: true,
                  props: {
                    // disabled: true
                  }
                }
              ]
            }
          ]
        },
        {
          type: "checkbox",
          title: "触发方式",
          info: "选择适合的触发方式",
          field: "triggerType",
          value: ["MR触发", "Push触发"],
          style: {
            float: 'left'
          },
          options: [
            {value: "1", label: "MR触发", disabled: false},
            {value: "2", label: "Push触发", disabled: true}
          ]
        },
        {
          type: 'codemirror',
          field: 'code',
          title: 'shell命令',
          props: {
            options: {
              tabSize: 4,
              mode: 'text/javascript',
              theme: 'monokai',
              lineNumbers: true,
              line: true
            }
          },
          // on:{
          //   change:()=>{
          //     alert(JSON.stringify(this.fApi.formData()))
          //   }
          // },
          style: {
            lineHeight: '1.5'
          },
          value: `text`
        },
        {
          type: 'group',
          title: '批量添加',
          field: 'group',
          value: [],
          props: {
            rules: [
              {
                type: 'col',
                children: [
                  {
                    type: 'input',
                    field: 'paramName',
                    title: '参数名称',
                    props: {
                      disabled: false
                    },
                    col: {
                      span: 8
                    }
                  },
                  {
                    type: 'input',
                    field: 'paramType',
                    title: '参数类型',
                    props: {
                      disabled: false
                    },
                    col: {
                      span: 8
                    }
                  },
                  {
                    type: 'input',
                      field: 'paramValue',
                    title: '参数值',
                    props: {
                    disabled: false
                  },
                    col: {
                      span: 8
                    }
                  }
                ]
              }
            ],
            expand: 1
          }
        },
        {
          type:'el-button',
          name: 'btn',
          props:{
            type:'primary',
            field:'btn',
            loading:true
          },
          children:['加载中']
        }
      ]
    }
  }
}
</script>

<style scoped>
.onedot {
  padding: 0px;
}
.CodeMirror { text-align: left!important; }
</style>
