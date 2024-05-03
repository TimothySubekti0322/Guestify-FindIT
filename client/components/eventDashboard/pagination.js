import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-paper";

const Pagination = ({
  width,
  currentPage,
  handleCurrentPageChange,
  totalPage,
}) => {
  const [previousPageDisabled, setPreviousPageDisabled] = useState(true);
  const [nextPageDisabled, setNextPageDisabled] = useState(true);

  const [paginationShown, setPaginationShown] = useState([]);

  // render paginationShown
  useEffect(() => {
    const length = totalPage <= 3 ? totalPage : 3;
    setPaginationShown(Array.from({ length: length }, (_, i) => i + 1));
    setNextPageDisabled(totalPage <= 3);
  }, [totalPage]);

  const nextPaginationList = () => {
    // If Pagination Clicked and will reach the end of List
    if (paginationShown[paginationShown.length - 1] == totalPage - 1) {
      const newPagination = paginationShown.map((item) => item + 1);
      setPaginationShown(newPagination);
      setNextPageDisabled(true);
      setPreviousPageDisabled(false);
    }
    // If Pagination Clicked and will not reach the end of List
    else if (paginationShown[paginationShown.length - 1] < totalPage - 1) {
      const newPagination = paginationShown.map((item) => item + 1);
      setPaginationShown(newPagination);
      setPreviousPageDisabled(false);
    }
  };

  const previousPaginationList = () => {
    // If Pagination Clicked and will reach the start of List
    if (paginationShown[0] == 2) {
      const newPagination = paginationShown.map((item) => item - 1);
      setPaginationShown(newPagination);
      setPreviousPageDisabled(true);
      setNextPageDisabled(false);
    }
    // If Pagination Clicked and will not reach the start of List
    else if (paginationShown[0] > 2) {
      const newPagination = paginationShown.map((item) => item - 1);
      setPaginationShown(newPagination);
      setNextPageDisabled(false);
    }
  };

  return (
    <View
      className="flex-row items-center justify-between mx-8 mt-4"
      style={{ width: width - 64 }}
    >
      <Text className="text-[#757D85]">
        Page {currentPage} of {totalPage}
      </Text>
      <View className="flex-row gap-x-3">
        <Pressable
          className="items-center px-1 py-1 border-[#d6e6f0] border-2 rounded-md"
          onPress={() => previousPaginationList()}
        >
          <Icon
            source="chevron-left"
            color={previousPageDisabled ? "#d6e6f0" : "#385150"}
            size={20}
          ></Icon>
        </Pressable>
        {paginationShown.map((item, index) => (
          <Pressable
            key={index}
            className={`items-center px-2 py-1 ${
              currentPage === item
                ? "bg-[#690895] border-2 border-[#690895]"
                : "border-[#c0dced] border-2"
            } rounded-md`}
            onPress={() => handleCurrentPageChange(item)}
          >
            <Text
              className={`${
                currentPage === item ? "text-white" : "text-[#385150]"
              } font-semibold`}
            >
              {item}
            </Text>
          </Pressable>
        ))}
        {/* <View className="items-center px-2 py-1 bg-[#690895] border-2 border-[#690895] rounded-md">
          <Text className="font-semibold text-white">1</Text>
        </View>
        <View className="items-center px-2 py-1 border-[#c0dced] border-2 rounded-md">
          <Text className="font-semibold text-[#385150]">2</Text>
        </View>
        <View className="items-center px-2 py-1 border-[#c0dced] border-2 rounded-md">
          <Text className="font-semibold text-[#385150]">3</Text>
        </View> */}
        <Pressable
          className="items-center px-1 py-1 border-[#d6e6f0] border-2 rounded-md"
          onPress={() => nextPaginationList()}
        >
          <Icon
            source="chevron-right"
            color={nextPageDisabled ? "#d6e6f0" : "#385150"}
            size={20}
          ></Icon>
        </Pressable>
      </View>
    </View>
  );
};

export default Pagination;
