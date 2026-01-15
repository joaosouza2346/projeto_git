class Stack {
    constructor() {
        this.items = [];
    }

    // Adicionar elemento no topo da pilha
    push(element) {
        this.items.push(element);
        console.log(`🟢 Adicionado: ${element}`);
    }

    // Remover elemento do topo
    pop() {
        if (this.isEmpty()) {
            return "❌ A pilha está vazia";
        }
        return this.items.pop();
    }

    // Ver o elemento do topo
    peek() {
        if (this.isEmpty()) {
            return "❌ A pilha está vazia";
        }
        return this.items[this.items.length - 1];
    }

    // Verificar se está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Tamanho da pilha
    size() {
        return this.items.length;
    }

    // Mostrar pilha
    print() {
        console.log("📦 Pilha:", this.items.join(" | "));
    }
}
