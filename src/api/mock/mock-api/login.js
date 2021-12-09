export default {
  login: {
    url: "/api/login",
    type: "post",
    response: {
      status: 200,
      message: "success",
      data: {
        total: 100,
        "rows|10": [
          {
            id: "@guid",
            name: "@cname",
            "age|20-30": 23,
            "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"],
          },
        ],
      },
    },
  },
  loginOut: {
    url: "/api/searchBook",
    type: "get",
    response: {
      status: 200,
      message: "success",
      data: {
        total: 100,
        "list|10": [
          {
            // bookId: "@guid",
            "bookId|30000-40000": 31897,
            author: "@cname",
            "chapterStatus|1": ["END", "SERIALIZE"],
            desc: "@csentence",
            "categoryName|1": ["都市小说", "历史小说", "其他小说"],
            title: "@ctitle",
          },
        ],
      },
    },
  },
};
