import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"



// Importou a scroll view errada, precisa apaga essaz






 
export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "clássico",
            description: "pão de hamburguer, 2 hamburgueres, queijo, alface, tomate, cebola e requeijão e batata frita",
            price: 21.00,
            image: require("@/assets/images/classico.png")
        },
        {
            id: 2,
            name: "X-bacon",
            description: "pão, 2 hamburgueres, bacon,  cheddar e batata frita. ",
            price: 25.99,
            image: require("@/assets/images/xBacon.jpg")
        },
        {
            id: 3,
            name: "X-picanha",
            description: "pão, 2 hamburgueres de picanha, cheddar, cebola e requeijão e batata frita.",
            price: 31.00,
            image: require("@/assets/images/picanha.png")
        },
        {
            id: 4,
            name: "moda da casa",
            description: "pão, 3 hambuegueres de picanha, cheddar, bacon, onion rings e batata frita.",
            price: 35.99,
            image: require("@/assets/images/modaDaCasa.png") // Falto
        }
    ]

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Image style={styles.headerImage} source={require("../../assets/images/estabelecimento.png")}/>

             </View>

             <View style={styles.tabs}>
                {["Combos", "Lanches", "Fritas", "Bebidas"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
             </View>

                <ScrollView>
             {
                MENU.map((item) => (
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuContent}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                        </View>
                        <Image style={styles.itemImage} source={item.image}/>
                    </TouchableOpacity>
                ))
             }
              </ScrollView>
        </View>
        
    )
}
