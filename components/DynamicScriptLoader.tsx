import { useEffect } from 'react'

function DynamicScriptLoader() {
  useEffect(() => {
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')
    const script3 = document.createElement('script')

    script1.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
    script2.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.1/dist/esm/popper.min.js'
    script3.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'

    document.body.appendChild(script1)
    document.body.appendChild(script2)
    document.body.appendChild(script3)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
      document.body.removeChild(script3)
    }
  }, [])

  return null
}
export default DynamicScriptLoader