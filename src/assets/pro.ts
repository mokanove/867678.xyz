import { useRouter } from 'vue-router'

export function useBak() {
  const router = useRouter()
  
  const bak = () => {
    router.push('/')
  }
  
  return {
    bak
  }
}