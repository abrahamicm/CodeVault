
```mermaid
graph TD
    A(Inicio) --> B{Hay elementos por ordenar?}
    B -- No --> C(Fin)
    B -- Sí --> D{Se hizo algún intercambio en el recorrido}
    D -- No --> B
    D -- Sí --> E{Recorrer los elementos}
    E --> F{Elemento actual > Elemento siguiente}
    F -- Sí --> G(Intercambiar elementos)
    G --> D
    F -- No --> E
    E --> B
    C --> F
```

Este diagrama de flujo representa el algoritmo de ordenamiento de burbuja, donde se realiza un recorrido por la lista de elementos y se comparan los elementos adyacentes. Si el elemento actual es mayor que el siguiente, se intercambian. Este proceso se repite hasta que no haya elementos por ordenar o no se realicen intercambios en el recorrido.
