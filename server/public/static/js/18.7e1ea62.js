webpackJsonp([18],{QbvT:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,"\n.wm_admin_sk_copy{\r\n  border-radius: 3px;\r\n  border:1px solid #bebebe;\r\n  padding: 5px 10px;\r\n  height: 24px;\r\n  line-height: 24px;\n}\r\n",""])},QqFP:function(e,t,r){"use strict";function o(e){r("RwhB")}Object.defineProperty(t,"__esModule",{value:!0});var i=r("woOf"),n=r.n(i),a=r("r4Fr"),s=(r("oAV5"),{data:function(){return{form:{text:"",title:"",top:!1,time:(new Date).getTime()},id:null,token:sessionStorage.getItem("adminToken")?sessionStorage.getItem("adminToken"):localStorage.getItem("adminToken")}},created:function(){this.id=this.$route.query._id,this.id&&this.getNews()},mounted:function(){},methods:{backIndex:function(){this.$router.push({path:"/cardadmin/center/newslist"})},getNews:function(){var e=this,t={type:"get",token:this.token,_id:this.id};a.a.adminNews(t).then(function(t){1==t.data.code?e.form=t.data.data:e.$message.error(t.data.msg)})},onSubmit:function(){var e=this,t={type:"add",token:this.token};if(this.id&&(t.type="edit",t._id=this.id),t=n()(t,this.form),!t.text||!t.title||isNaN(t.time))return this.$message.error("提交内容有误，请检查！"),!1;a.a.adminNews(t).then(function(t){1==t.data.code?(e.$message({message:"新闻发布成功！",type:"success"}),e.$router.push({path:"/cardadmin/center/newslist"})):e.$message.error(t.data.msg)})}}}),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wmcard_admincenter_common_right_body"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"内容"}},[r("el-input",{attrs:{type:"textarea",rows:20,placeholder:"请输入内容"},model:{value:e.form.text,callback:function(t){e.$set(e.form,"text",t)},expression:"form.text"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"首页显示"}},[r("el-switch",{model:{value:e.form.top,callback:function(t){e.$set(e.form,"top",t)},expression:"form.top"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"发布时间"}},[r("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",placeholder:"选择发布时间"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.id?"修改":"发布"))]),e._v(" "),r("el-button",{on:{click:e.backIndex}},[e._v("返回")])],1)],1)],1)},m=[],d={render:l,staticRenderFns:m},c=d,f=r("VU/8"),u=o,p=f(s,c,!1,u,null,null);t.default=p.exports},RwhB:function(e,t,r){var o=r("QbvT");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("66699c75",o,!0,{})}});