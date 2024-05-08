import { View, Text, ScrollView, Pressable, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, TextInput } from "react-native-paper";
import SubMenu from "./subMenu";
import GuestBookTable from "./guestBookTable";
import Pagination from "./pagination";
import NoDataComponent from "../noData/noDataComponent";

const dataPerPage = 10;

const GuestBookTableSection = ({ subMenu, setSubMenu, data }) => {
  const width = Dimensions.get("window").width;
  const [searchQuery, setSearchQuery] = useState("");

  // loading
  const [loading, setLoading] = useState(true);

  // Data
  const [rawDataAPI, setRawDataAPI] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [dataShown, setDataShown] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  // Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      console.log(data.listGuest);
      // fetch data here
      setRawDataAPI(data.listGuest);
      setRawData(data.listGuest);
      setDataShown(data.listGuest.slice(0, dataPerPage));
      setTotalPage(Math.ceil(data.listGuest.length / dataPerPage));
    };
    fetchData();
    setLoading(false);
  }, []);

  const handleCurrentPageChange = (page) => {
    setCurrentPage(page);
    if (page == totalPage) {
      setDataShown(rawData.slice((page - 1) * dataPerPage));
    } else {
      setDataShown(rawData.slice((page - 1) * dataPerPage, page * dataPerPage));
    }
  };

  const handleSearchQueryChange = (text) => {
    console.log(text);
    setSearchQuery(text);
    if (!text) {
      setRawData(rawDataAPI);
      setTotalPage(Math.ceil(rawDataAPI.length / dataPerPage));
      setCurrentPage(1);
      setDataShown(rawDataAPI.slice(0, dataPerPage));
    } else {
      console.log("searching");
      const filteredData = rawDataAPI.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setTotalPage(Math.ceil(filteredData.length / dataPerPage));
      setRawData(filteredData);
      setCurrentPage(1);
      setDataShown(filteredData.slice(0, dataPerPage));
    }
  };

  return (
    <>
      <View className="relative bg-[#F7F7F7] px-8 pt-10">
        {/* SubMenu */}
        <SubMenu subMenu={subMenu} setSubMenu={setSubMenu} />
      </View>
      {loading ? (
        <View
          className="items-center justify-center bg-[#F7F7F7]"
          style={{ flex: 1 }}
        >
          <ActivityIndicator animating={true} color="#E9A400" size="large" />
          <Text className="mt-6 text-xl">Loading...</Text>
        </View>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
          {data.listGuest.length == 0 ? (
            <NoDataComponent />
          ) : (
            <>
              {/* Search */}
              <View className="px-8 mt-2">
                <TextInput
                  theme={{ roundness: 20 }}
                  mode="outlined"
                  textColor="black"
                  activeOutlineColor="#6D6D6D"
                  underlineColor="#FFFFFF"
                  activeUnderlineColor="#FFFFFF"
                  placeholder="Search"
                  className="underline-0"
                  underlineStyle={{ borderColor: "white" }}
                  value={searchQuery}
                  onChangeText={(query) => handleSearchQueryChange(query)}
                  style={{ backgroundColor: "white", borderRadius: 20 }}
                  left={<TextInput.Icon icon="magnify" color="#6D6D6D" />}
                />
              </View>

              {/* Table */}
              <GuestBookTable data={dataShown} />

              {/* Pagination */}
              <Pagination
                width={width}
                currentPage={currentPage}
                handleCurrentPageChange={handleCurrentPageChange}
                totalPage={totalPage}
              />

              {/* Button */}
              <View className="mx-8 mb-12">
                <View className="w-full rounded-full bg-[#E9A400] overflow-hidden mt-6">
                  <Pressable
                    className="items-center py-4"
                    android_ripple={{ color: "#C78200" }}
                    onPress={() => console.log("Export Guest Book")}
                  >
                    <Text
                      className="text-white "
                      style={{ fontFamily: "Manrope-Bold", fontSize: 16 }}
                    >
                      Export Guest Book
                    </Text>
                  </Pressable>
                </View>
              </View>
            </>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default GuestBookTableSection;
