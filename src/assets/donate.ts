import { ElMessageBox } from 'element-plus'

export const donate = () => {
  ElMessageBox.alert('USDT Tron:TBrZFA4NstpHTzQ5XNh6ocvidSin9C1Yc1', 'Donate', {
    confirmButtonText: 'OK',
    callback: () => {
    ElMessageBox.alert('For other donation questions, please contact donate@867678.xyz', 'INFO', {
    confirmButtonText: 'OK',
  })
    },
  })
}