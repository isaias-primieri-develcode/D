/* eslint-disable quotes */
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import "moment/locale/pt-br";
import React, { useCallback, useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Header } from "../../components/Headers/header.component";
import { HistoricComponent } from "../../components/HistoricComponent/historic.component";
import { Load } from "../../components/ViewLoading/viewLoading.component";
import { useAuth } from "../../contexts/auth";
import theme from "../../global/theme";
import api from "../../service/api";
import { ViewLoading } from "../Home/home.styles";

import { Container, DateText, Title, TitleView } from "./historic.styles";

interface SectionListData {
  title: string;
  data: DataProps[];
}
interface food_types_props {
  id: number;
  name: string;
}

interface RestaurantProps {
  id: number;
  name: string;
  photo_url: string;
  food_types: food_types_props[];
}

interface foodTypeProps {
  id: number;
  name: string;
}

interface plateDTOProps {
  id: number;
  name: string;
  price: number;
  photo_url: string;
  restaurantName: string;
  description: string;
  foodType: foodTypeProps;
}

interface requestItemsProps {
  id: number;
  plateDTO: plateDTOProps;
  quantity: number;
  price: number;
  observation: string;
}

interface DataProps {
  id: number;
  costumer: null;
  restaurant: RestaurantProps;
  date: string;
  dateLastUpdated: number;
  totalValue: number;
  paymentType: string;
  status: string;
  requestItems: requestItemsProps[];
}
interface OrderListProps {
  content: DataProps[];
}

export function Historic() {
  const [data, setData] = useState<DataProps[]>([]);
  const { authState } = useAuth();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [historicSections, setHistoricSections] = useState<SectionListData[]>(
    []
  );

  async function fetchData(onSuccess?: (response: OrderListProps) => void) {
    setLoading(true);
    try {
      await api
        .get<OrderListProps>(`/request/costumer?page=${page}&quantity=10`, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        })
        .then((response) => {
          setData(response.data.content);
          onSuccess && onSuccess(response.data);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function renderItem({ item }: { item: DataProps }) {
    return item ? (
      <HistoricComponent
        orderStatus={item.status}
        number={item.id}
        photo_url={item.restaurant.photo_url}
        observationName={`${
          item.requestItems[0].quantity > 1 ? item.requestItems[0].quantity : 1
        } ${item.requestItems[0].plateDTO.name} ${
          item.requestItems[1]
            ? ` + ${item.requestItems[1].quantity} ${item.requestItems[1].plateDTO.name}`
            : ""
        } ${
          item.requestItems[2]
            ? ` + ${item.requestItems[2].quantity} ${item.requestItems[2].plateDTO.name}`
            : ""
        }  ${
          item.requestItems[3]
            ? ` + ${item.requestItems[3].quantity} ${item.requestItems[3].plateDTO.name}`
            : ""
        } ${item.requestItems[4] ? "..." : ""}`}
        name={item.restaurant.name}
      />
    ) : null;
  }

  function sectionDataFormatter(Idata: DataProps[]) {
    const historicFormatted: SectionListData[] = [];
    Idata.forEach((order: DataProps) => {
      const sectionFound = historicFormatted.find(
        (historicSection: SectionListData) =>
          historicSection.title === order.date
      );
      if (sectionFound) {
        sectionFound.data.push(order);
        console.log("sectionFound");
      } else {
        historicFormatted.push({
          title: order.date,
          data: [order],
        });
        console.log("sectionNotFound");
      }
    });
    setHistoricSections(historicFormatted);
  }

  function onSucces(response: OrderListProps) {
    setData([...data, ...response.content]);
    // console.log(response.content);
  }

  async function loadRestaurants() {
    await fetchData(onSucces);
  }

  async function handleLoadOnEnd() {
    setPage(page + 1);
  }

  useEffect(() => {
    (async () => await fetchData(onSucces))();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadRestaurants();
    }, [])
  );

  useEffect(() => {
    data && sectionDataFormatter([...data, ...data]);
  }, [data]);

  useEffect(() => {
    fetchData(onSucces);
  }, [page]);

  return (
    <Container>
      <SectionList
        ListHeaderComponent={() => (
          <>
            <Header
              name="Histórico"
              color={theme.colors.background_red}
              Textcolor={theme.colors.text_white}
            />
            <TitleView>
              <Title>Histórico</Title>
            </TitleView>
          </>
        )}
        sections={historicSections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderItem({ item })}
        renderSectionHeader={({ section: { title } }) => (
          <TitleView>
            <DateText>{moment(title).format("llll").slice(0, -9)}</DateText>
          </TitleView>
        )}
        // contentContainerStyle={{}}
        onEndReached={() => handleLoadOnEnd()}
        ListFooterComponent={
          <ViewLoading>{loading ? <Load /> : null}</ViewLoading>
        }
      />
    </Container>
  );
}
