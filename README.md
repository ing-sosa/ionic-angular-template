# 📄 Prueba Técnica: Módulo de Plantillas PDF Dinámicas

## 🎯 **Objetivo Principal**
Desarrollar un módulo para crear y gestionar plantillas PDF dinámicas que permita a los usuarios diseñar documentos profesionales con headers, footers y contenido paginado automáticamente.

## 📋 **Requerimientos Funcionales**

### **Funcionalidad Core (Mínimo Viable)**
1. **Listado de Plantillas**
   - Mostrar plantillas existentes
   - Botón para crear nueva plantilla
   - Opciones de editar/eliminar plantillas

2. **Editor de Plantillas**
   - Configurar **header dinámico** con 1-4 columnas
   - Configurar **footer dinámico** con 1-4 columnas
   - Cada columna debe soportar:
     - Texto enriquecido (bold, italic, color, viñetas)
     - Imágenes con control de dimensiones
   - Marca de agua opcional (imagen de fondo con opacidad y tamaño ajustable)

3. **Generación de PDF**
   - Soporte para hojas tamaño **carta** y **media carta**
   - **Paginación automática**: header/footer se mantienen en todas las páginas
   - Vista previa en tiempo real
   - Exportación/descarga del PDF

### **Características Avanzadas (Puntos Extra)**
- Numeración automática de páginas
- Drag & drop para subir imágenes
- Responsive design para diferentes pantallas
- Persistencia de datos (localStorage o backend)

## 🛠️ **Especificaciones Técnicas**

### **Stack Permitido**
- **Frontend**: Ionic 8 + Angular Standalone + TypeScript
- **PDF Generation**: jsPDF + html2canvas (recomendado) O backend Laravel
- **Estilos**: SCSS + Ionic Components
- **Almacenamiento imágenes**: Base64 O assets folder (tu decides)

### **Estructura Mínima Sugerida**
```
src/app/pages/pdf-templates/
├── [tu estructura aquí]
```

### **Restricciones**
- ⏰ **24 horas naturales** desde el momento de inicio
- 📱 Debe funcionar en web (mobile es bonus)
- 🔧 Usar componentes standalone de Angular
- 📄 Al menos **una plantilla demo** funcional
- 🎨 UI debe ser intuitiva (no necesariamente bonita)

## 🧪 **Casos de Prueba Obligatorios**

Debes demostrar que tu solución maneja estos escenarios:

1. **Plantilla Simple**
   - Header con logo (imagen) + título en 2 columnas
   - Footer con texto centrado
   - Contenido que ocupe 1 página

2. **Plantilla Compleja**
   - Header con 3-4 columnas (texto + imágenes)
   - Marca de agua de fondo
   - Contenido que se extienda a múltiples páginas (mínimo 3)
   - Footer persistente en todas las páginas

3. **Ambos Formatos**
   - Demostrar funcionamiento en carta Y media carta

## 📊 **Criterios de Evaluación**

### **Funcionalidad**
- ✅ CRUD básico de plantillas
- ✅ Editor funcional de header/footer
- ✅ Generación correcta de PDF con paginación
- ✅ Manejo de imágenes y dimensiones

### **Arquitectura y Código**
- 🏗️ Organización y estructura del proyecto
- 🔧 Diseño de interfaces/modelos de datos
- 📝 Calidad del código TypeScript
- 🎯 Separación de responsabilidades

### **UI/UX**
- 👀 Usabilidad de la interfaz
- ⚡ Feedback visual (loadings, validaciones)
- 📱 Responsive design
- 🎨 Experiencia general del usuario

### **Problem Solving**
- 🧠 Creatividad en la solución de problemas técnicos
- ⚡ Manejo de casos edge y errores
- 🚀 Optimizaciones implementadas
- 📚 Documentación y comentarios

## 🎁 **Bonus Points (25 puntos extras máximo)**
- 🌟 Implementación solo frontend (jsPDF + Canvas)
- ⚡ Optimización de performance
- 🧪 Tests unitarios incluidos
- 📖 README detallado con arquitectura
- 🎨 Funcionalidades extra creativas
- 🔄 Manejo avanzado de estados

## 📦 **Entregables**

### **Código**
- Branch en `ionic-angular-template` con tus iniciales: `pdf-templates-[iniciales]`
- Commits descriptivos y organizados
- Código funcional (no importa si no está 100% completo)

### **Documentación Mínima**
- README con:
  - Instrucciones para ejecutar
  - Explicación de tu arquitectura
  - Funcionalidades implementadas vs pendientes
  - Decisiones técnicas importantes

### **Demo**
- Al menos 1 plantilla demo pre-cargada
- Funcionalidad básica de CRUD
- Generación de PDF que demuestre paginación

## ⚠️ **Importante**

- **No necesitas completar el 100%** - prioriza funcionalidad core
- **Documenta tus decisiones** - explica por qué elegiste ciertas aproximaciones
- **Maneja el tiempo** - mejor algo funcional que algo perfecto incompleto
- **Pregunta si tienes dudas** - solo sobre el scope, no sobre implementación

## 🚀 **¿Listo?**

**Te agradeceríamos que nos confirmaras por WhatsApp una vez que hayas comprendido los requerimientos.**
