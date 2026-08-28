import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ZoomIn } from 'lucide-react'

function CardModal({ isOpen, onClose, title = 'CARD INSPECTION', children }) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="card-zoom-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="card-zoom-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="card-zoom-header">
          <div className="card-zoom-tag">
            <ZoomIn size={14} />
            <span>[ ENLARGED_VIEW // {title} ]</span>
          </div>
          <button
            type="button"
            className="card-zoom-close-btn"
            onClick={onClose}
            aria-label="Close zoom view"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="card-zoom-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default CardModal
