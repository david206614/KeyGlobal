const PHONE = '573160179289';

const messageTemplates: Record<string, string> = {
  general: 'Hola! Visité su página web y me gustaría recibir información general sobre sus servicios de merchandising y productos.',
  indumentaria: 'Hola! Estaba viendo los trabajos de indumentaria personalizada en su catálogo web y me interesa cotizar una cantidad para mi organización.',
  medallas: 'Hola! Me llamaron la atención los diseños de medallas y reconocimientos que tienen en su portafolio. ¿Me podrían dar información de precios y tiempos de entrega?',
  institucional: 'Hola! Deseo cotizar artículos promocionales e institucionales basados en los modelos que vi en su sitio web.',
};

export function buildWhatsAppUrl(category?: string, productName?: string): string {
  let message = messageTemplates.general;

  if (category) {
    const slug = category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (slug.includes('indumentaria') || slug.includes('textil') || slug.includes('ropa')) {
      message = messageTemplates.indumentaria;
    } else if (slug.includes('medalla') || slug.includes('reconocimiento')) {
      message = messageTemplates.medallas;
    } else if (slug.includes('institucional') || slug.includes('merchandising') || slug.includes('promocional')) {
      message = messageTemplates.institucional;
    }
  }

  if (productName) {
    message += ` Me interesa el producto: ${productName}.`;
  }

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppLink(category?: string, productName?: string): { href: string; label: string } {
  const href = buildWhatsAppUrl(category, productName);
  const label = productName
    ? `Cotizar "${productName}" por WhatsApp`
    : 'Cotizar por WhatsApp';
  return { href, label };
}

// Quote form message generator
export function buildQuoteMessage(
  productName: string,
  quantity: number,
  variants: string,
  requirements: string
): string {
  const message = `Hola KeyGlobal, me interesa cotizar el producto: ${productName}
Cantidad: ${quantity}
Especificaciones: ${variants || 'No especificadas'}
Detalles adicionales: ${requirements || 'Ninguno'}`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
