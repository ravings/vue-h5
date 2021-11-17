export const formList = () => [
  {
    fieldName: "name1",
    label: "桩主",
    type: "text",
    value: "",
    rules: [
      {
        required: true,
        message: "请输入正确内容",
        // trigger: "onChange",
      },
    ],
  },
  {
    fieldName: "name2",
    label: "手机号",
    type: "number",
    value: "",
  },
  {
    fieldName: "name3",
    label: "桩主编号",
    type: "text",
    value: "",
  },
  {
    fieldName: "name4",
    label: "私桩地址",
    type: "text",
    value: "",
  },
  {
    fieldName: "name5",
    label: "经度",
    type: "text",
    value: "",
  },
  {
    fieldName: "name6",
    label: "纬度",
    type: "text",
    value: "",
  },
  {
    fieldName: "name7",
    label: "设备名称",
    type: "text",
    value: "",
  },
  {
    fieldName: "name8",
    label: "设备型号",
    type: "text",
    value: "",
  },
  {
    fieldName: "name9",
    label: "设备编号",
    type: "text",
    value: "",
  },
  {
    fieldName: "name10",
    label: "物料号",
    type: "text",
    value: "",
  },
  {
    fieldName: "name11",
    label: "充电桩类型",
    formItemType: "select",
    type: "text",
    value: "",
    valueLabel: "",
    popupType: "picker",
    showPicker: false,
    columns: [
      {
        text: "有线",
        value: "1",
      },
      {
        text: "无线",
        value: "2",
      },
    ],
  },
  {
    fieldName: "name12",
    label: "设备桩类型",
    formItemType: "select",
    type: "text",
    value: "",
    valueLabel: "",
    popupType: "picker",
    showPicker: false,
    columns: [
      {
        text: "有线",
        value: "1",
      },
      {
        text: "无线",
        value: "2",
      },
    ],
  },
  {
    fieldName: "name13",
    label: "蓝牙/WiFi",
    type: "text",
    value: "",
  },
  {
    fieldName: "name14",
    label: "蓝牙UUID",
    type: "text",
    value: "",
  },
  {
    fieldName: "name15",
    label: "蓝牙密码",
    type: "text",
    value: "",
  },
  {
    fieldName: "name16",
    label: "充电接口数",
    type: "text",
    value: "",
  },
  {
    fieldName: "name17",
    label: "设备总功率(KW)",
    type: "text",
    value: "",
  },
  {
    fieldName: "name18",
    label: "供应商名称",
    type: "text",
    value: "",
  },
  {
    fieldName: "name19",
    label: "供应商编号",
    type: "text",
    value: "",
  },
  {
    fieldName: "name20",
    label: "OTA标识",
    type: "text",
    value: "",
  },
  {
    fieldName: "name21",
    label: "生产日期(非必填)",
    formItemType: "select",
    type: "text",
    value: "",
    popupType: "DatetimePicker",
    currentDate: new Date(),
    showPicker: false,
  },
  {
    fieldName: "name22",
    label: "流量启用日期(非必填)",
    formItemType: "select",
    type: "text",
    value: "",
    popupType: "DatetimePicker",
    currentDate: new Date(),
    showPicker: false,
  },
];
