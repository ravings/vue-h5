<template>
  <div style="height: 100%">
    <div class="warp">
      <div class="warp-title">
        <svg-icon iconClass="icon" class="icon-class" />
        <div>设备经纬度</div>
        <svg-icon iconClass="icon" class="icon-class" />
      </div>
      <divider />
      <div>
        <van-form
          input-align="right"
          label-width="10.2em"
          :show-error-message="true"
        >
          <template v-for="(item, index) in formList">
            <van-field
              v-if="item.formItemType == 'select'"
              :key="index"
              readonly
              clickable
              :name="item.fieldName"
              :value="item.valueLabel ? item.valueLabel : item.value"
              :label="item.label"
              @click="item.showPicker = true"
            >
              <template #right-icon>
                <svg-icon iconClass="icon" class="icon-class" />
              </template>
            </van-field>
            <van-field
              v-else
              :key="index"
              v-model="item.value"
              :type="item.type"
              :label="item.label"
              :name="item.fieldName"
              :rules="item.rules"
            />
          </template>
        </van-form>
      </div>
    </div>
    <div class="footer"></div>
    <div class="footerButton">
      <van-button class="button" @click="submitForm" round block type="info"
        >立即激活</van-button
      >
    </div>
    <template v-for="(item, index) in popupList">
      <van-popup :key="index" v-model="item.showPicker" position="bottom">
        <van-picker
          v-if="item.popupType == 'picker'"
          show-toolbar
          :columns="item.columns"
          @confirm="onPopupConfirm($event, item)"
          @cancel="onPopupCancel(item.fieldName)"
        />
        <van-datetime-picker
          v-if="item.popupType == 'DatetimePicker'"
          v-model="item.currentDate"
          type="datetime"
          :formatter="formatter"
          @confirm="onPopupConfirm($event, item)"
          @cancel="onPopupCancel(item.fieldName)"
        />
      </van-popup>
    </template>
  </div>
</template>

<script>
import {
  Divider,
  Form as vanForm,
  Field as vanField,
  Popup as vanPopup,
  Picker as vanPicker,
  DatetimePicker as vanDatetimePicker,
  Button as vanButton,
} from "vant";
import moment from "moment";
import { formList } from "./js/index";
export default {
  data() {
    return {
      formList: formList(),
    };
  },
  components: {
    Divider,
    vanForm,
    vanField,
    vanPopup,
    vanPicker,
    vanDatetimePicker,
    vanButton,
  },
  //监听属性 类似于data概念
  computed: {
    popupList() {
      let arr = this.formList.reduce((pre, cur) => {
        if (cur.formItemType) {
          pre.push(cur);
        }
        return pre;
      }, []);
      console.log(arr);
      return arr;
    },
    formValue() {
      let obj = this.formList.reduce(
        (pre, cur) => ({
          ...pre,
          [cur.fieldName]: cur.value,
        }),
        {}
      );
      // console.log(obj);
      return obj;
    },
  },
  //方法集合
  methods: {
    submitForm() {
      console.log(this.formValue);
    },
    onPopupConfirm(value, item) {
      console.log(value, item);
      let itemValue = "";
      let fromItem = this.formList.find((x) => x.fieldName == item.fieldName);
      if (item.popupType == "DatetimePicker") {
        itemValue = moment(value).format("YYYY/MM/DD HH:mm");
        fromItem.value = itemValue;
      }
      if (item.popupType == "picker") {
        itemValue = value.value;
        fromItem.value = itemValue;
        fromItem.valueLabel = value.text;
      }
      fromItem.showPicker = false;
    },
    onPopupCancel(fieldName) {
      this.formList.find((x) => x.fieldName == fieldName).showPicker = false;
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      } else if (type == "day") {
        return `${val}日`;
      } else if (type == "hour") {
        return `${val}时`;
      } else if (type == "minute") {
        return `${val}分`;
      }
      return val;
    },
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let footer = document.getElementsByClassName("footer")[0];
    let footerButton = document.getElementsByClassName("footerButton")[0];
    footer.style.height = footerButton.offsetHeight + "px";
    // console.log(warp, footerButton);
  },
};
</script>
<style lang="scss" scoped>
//@import; 引入公共css类
.warp {
  margin: 0 20px;
  border: 1px solid red;
  .warp-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
}
.footer {
  // height: ;
}
.footerButton {
  padding: 10px 0;
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  .button {
    margin: 0 -20px 0 10px;
  }
}
</style>
