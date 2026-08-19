/**
 * Google Ads & Analytics Event Tracking Utility
 * Safe wrapper around window.gtag and window.dataLayer for landing page conversion readiness.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export const GA_TRACKING_ID = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GA_ID) || ''

/**
 * Fires a Google Ads or Google Analytics custom event safely
 */
export function trackEvent(eventName: string, eventParams: Record<string, any> = {}) {
  if (typeof window !== 'undefined') {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams)
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      })
    } else {
      // In development mode, log events cleanly for audit verification
      if (import.meta.env.DEV) {
        console.log(`[Google Analytics / Ads Event]: ${eventName}`, eventParams)
      }
    }
  }
}

/**
 * Helper triggers for high-intent Google Ads conversion goals
 */
export const GoogleAdsEvents = {
  // Lead Generation Form Submission
  leadSubmitted: (formType: string = 'contact_form') => {
    trackEvent('generate_lead', {
      event_category: 'engagement',
      event_label: formType,
      value: 1.0,
    })
  },

  // Calculator Usage Tracking
  calculatorUsed: (calcName: string, calcValue?: number) => {
    trackEvent('calculator_used', {
      event_category: 'calculator',
      event_label: calcName,
      value: calcValue,
    })
  },

  // WhatsApp Click Action
  whatsappClicked: (source: string) => {
    trackEvent('click_whatsapp', {
      event_category: 'contact',
      event_label: source,
    })
  },

  // Direct Phone Call Click Action
  phoneClicked: (source: string) => {
    trackEvent('click_phone', {
      event_category: 'contact',
      event_label: source,
    })
  },

  // Consultation CTA Click Action
  consultationRequested: (ctaSource: string) => {
    trackEvent('click_consultation', {
      event_category: 'conversion_intent',
      event_label: ctaSource,
    })
  },
}
