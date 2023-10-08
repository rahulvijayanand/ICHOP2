import { View, Dimensions } from "react-native";
import React,{useCallback,useContext,useEffect,useState} from "react";
const { width, height } = Dimensions.get("window");
import productdata from "../productdata.json";
import { productcontext } from "../Context/context";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import Text from "../fonts/Text";
const PurchaseDetails = () => {
    const { product } = useContext(productcontext);
  const [currentproductdata, setproductdata] = product;

  const [totaloriginalprice,settotaloriginalprice]=useState(0);
  const [totaldiscountedprice,settotaldiscountedprice]=useState(0);
  const [totalsavings,settotalsavings]=useState(0);

  useEffect(() => {
    let original=0;
    let discount=0
    for(let i=0;i<currentproductdata.length;i++){
        if(currentproductdata[i].iscart){
            original=original+(parseInt(currentproductdata[i].count)*parseInt(currentproductdata[i].originalprice))
            discount=discount+(parseInt(currentproductdata[i].count)*parseInt(currentproductdata[i].priceafterdiscount))
        }
    }
    settotaloriginalprice(original)
    settotaldiscountedprice(discount)
    settotalsavings(original-discount)
  }, [currentproductdata]);

  return (
    <View
      style={{
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: "white",
        width: width - 50,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 50,
        borderWidth: 1,
        borderColor: "#eeeeee",
        paddingBottom:25,
        marginBottom:50
      }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 24,
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Purchase Details
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column",marginLeft:20 }}>
          <Text
            style={{
              color: "gray",
              opacity:0.5,
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
            Actual price
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
            Item total
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
            Discount
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
            Delivery charges
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
            You save
          </Text>
        </View>

        <View style={{ flexDirection: "column",marginLeft:50,}}>
          <Text
            style={{
              textAlign:"right",
              color: "gray",
              opacity:0.5,
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
            ₹{totaloriginalprice}
          </Text>
          <Text
            style={{
              textAlign:"right",
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
             ₹{totaldiscountedprice}
          </Text>
          <Text
            style={{
              textAlign:"right",
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
            ₹{totalsavings}
          </Text>
          <Text
            style={{
              textAlign:"right",
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
             ₹30
          </Text>
          <Text
            style={{
              textAlign:"right",
              fontSize: 14,
              marginRight: 25,
              marginTop: 10,
            }}
          >
             ₹{totalsavings-30}
          </Text>
        </View>

      </View>
    </View>
  );
};

export default PurchaseDetails;
