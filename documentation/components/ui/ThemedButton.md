## 🔗 Navegación

⬅️ [Volver Atrás](../index.md)  
🏠 [Volver al Inicio](/documentation/index.MD)

# 📌 ThemedButton

**ThemedButton** es un componente **reutilizable** de botón con múltiples variantes de estilo y amplias opciones de personalización. Diseñado para ser altamente flexible y adaptable a diferentes contextos de interfaz.

## 📌 Propiedades (Props)

| Propiedad      | Tipo                                                    | Default                    | Descripción                                                                 |
| -------------- | ------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------- |
| `variant`      | `"primary" \| "secondary" \| "icon" \| "custom"`        | `"primary"`                | Define el estilo visual del botón.                                          |
| `text`         | `string`                                                | `undefined`                | Texto del botón (alternativa a children).                                   |
| `icon`         | `React.ReactNode`                                       | `undefined`                | Icono opcional para el botón.                                               |
| `children`     | `React.ReactNode`                                       | `-`                        | Contenido del botón (tiene prioridad sobre text).                           |
| `onClick`      | `function`                                              | `undefined`                | Función ejecutada al hacer clic.                                            |
| `disabled`     | `boolean`                                               | `false`                    | Deshabilita el botón si es `true`.                                          |
| `type`         | `"button" \| "submit" \| "reset"`                       | `"button"`                 | Tipo de botón HTML.                                                         |
| `fullWidth`    | `boolean`                                               | `false`                    | Si el botón debe ocupar todo el ancho disponible.                           |
| `shadow`       | `boolean`                                               | `true`                     | Define si se muestra la sombra o no.                                        |
| `className`    | `string`                                                | `""`                       | Clases CSS adicionales para personalización.                                |
| `bgColor`      | `string`                                                | `"bg-background-primary"`  | Color de fondo personalizado (solo para variant="custom").                  |
| `textColor`    | `string`                                                | `"text-third"`             | Color de texto personalizado (solo para variant="custom").                  |
| `hoverColor`   | `string`                                                | `"hover:bg-background-secondary"` | Color al pasar el cursor (solo para variant="custom").               |

## 📌 Ejemplos de Uso

### ✅ **Botón Primario**

🔹 Usado para acciones principales con fondo oscuro y texto blanco.

```jsx
<ThemedButton variant="primary" onClick={() => console.log('Clicked')}>
  Guardar Cambios
</ThemedButton>
```

### ⚪ **Botón Secundario**

🔹 Usado para acciones secundarias con borde y fondo blanco.

```jsx
<ThemedButton variant="secondary" fullWidth={true}>
  Cancelar
</ThemedButton>
```

### 🎨 **Botón Personalizado**

🔹 Permite personalización completa de colores (solo con variant="custom").

```jsx
<ThemedButton 
  variant="custom"
  bgColor="bg-blue-500"
  textColor="text-white"
  hoverColor="hover:bg-blue-700"
>
  Botón Personalizado
</ThemedButton>
```

### ➕ **Botón con Ícono**

🔹 Botón optimizado para contener iconos, con padding reducido.

```jsx
<ThemedButton variant="icon" icon={<PlusIcon size={20} />}>
  Nuevo Elemento
</ThemedButton>
```

### 🔒 **Botón Deshabilitado**

🔹 Botón en estado deshabilitado con estilos específicos.

```jsx
<ThemedButton disabled={true} onClick={() => {}}>
  Acción No Disponible
</ThemedButton>
```

## 📌 Explicación de Props Importantes

- **`variant`**: Define el estilo base del botón. La opción "custom" permite máxima flexibilidad.
- **`fullWidth`**: Útil para botones en formularios o que deben ocupar todo el espacio disponible.
- **`shadow`**: Controla el efecto de sombra para dar profundidad al botón.
- **Propiedades de personalización** (`bgColor`, `textColor`, `hoverColor`): Solo aplican cuando se usa `variant="custom"`.

## 📌 Ejemplo Aplicado en Formulario

```jsx
<form>
  {/* Campos del formulario */}
  
  <div className="flex gap-4 mt-6">
    <ThemedButton 
      type="button" 
      variant="secondary" 
      onClick={() => resetForm()}
    >
      Cancelar
    </ThemedButton>
    
    <ThemedButton 
      type="submit" 
      variant="primary" 
      fullWidth={true}
      icon={<SaveIcon size={18} />}
    >
      Guardar Cambios
    </ThemedButton>
  </div>
</form>
```
