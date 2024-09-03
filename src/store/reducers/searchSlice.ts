import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ISearchResult } from "../../models/ISearchResult";

const SEARCH_API_KEY = import.meta.env.VITE_SEARCH_API_KEY;

interface SearchState {
  query: string;
  results: ISearchResult;
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  query: "",
  results: {
    suggestions: [],
  },
  isLoading: false,
  error: null,
};

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (querySting: string, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
        {
          query: querySting,
          locations: [
            {
              country: "*",
            },
          ],

          from_bound: { value: "city" },
          to_bound: { value: "settlement" },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + SEARCH_API_KEY,
          },
        }
      );
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue(
        "Не удалось загрузить список подходящих населенных пунктов"
      );
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    cleanSearchQuery: () => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchResults.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchSearchResults.fulfilled.type,
        (state, action: PayloadAction<ISearchResult>) => {
          state.isLoading = false;
          state.results = action.payload;
        }
      )
      .addCase(
        fetchSearchResults.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setSearchQuery, cleanSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
