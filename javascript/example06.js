let data = {
  HIST_ROW_KEY: "BC41400307856249330068127420230608A1771",
  CORP_BIZ_NO: "8758600859",
  FCODE: "361",
  FCODE_NM: "BC카드",
  CARD_TYPE: "C",
  CARD_TYPE_NM: "법인카드",
  CARD_NO: "4140030785624933",
  APPR_DATE: "20230608",
  APPR_TIME: "073645",
  SEQ: 1,
  APPR_NO: "00681274",
  STATE: "A",
  STATE_NM: "승인",
  CUR_CD: "USD",
  APPR_AMT_TOT: 771.76,
};

let histRowKey = data.HIST_ROW_KEY;
let corpCardNo = data.CORP_BIZ_NO;
//...

const {
  HIST_ROW_KEY,
  CORP_BIZ_NO,
  FCODE,
  FCODE_NM,
  CARD_NO,
  CUR_CD,
  APPR_AMT_TOT,
} = data;

console.log(HIST_ROW_KEY);

console.log(
  FCODE_NM +
    " 은행에 " +
    CARD_NO +
    " 번호 승인 금액은 " +
    APPR_AMT_TOT +
    " " +
    CUR_CD +
    " 입니다"
);

console.log(
  `${FCODE_NM} 카드사 ${CARD_NO} 번호 승인 금액은 ${APPR_AMT_TOT} ${CUR_CD} 입니다.`
);
