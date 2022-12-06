//Mui components
import { useTheme, styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

//Custom components
import Head from "../components/Head";

//ícones
import InfoIcon from "@mui/icons-material/Info";

const CustomGridDashItem = styled(Grid)(({ theme }) => ({
  height: "420px",
  padding: "5px",

  ".container-box": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    borderRadius: "4px",
    padding: "20px",
    background: theme.palette.action.hover,

    ".title": {
      width: "100%",
      height: "60px",
      h5: {
        color: theme.palette.text.primary,
        fontSize: "1.6em",
      },
    },

    ".dash": {
      height: "100%",
      width: "100%",
      //background: "#ccc",
    },
  },
}));

export default function Dashboards() {
  const theme = useTheme();

  return (
    <>
      <Head
        title="Dashboards"
        metaDescription="Painel de dashboards"
        keywords=""
      />
      <Grid container>
        <CustomGridDashItem item xs={12} sm={6} md={6} lg={4} xl={4}>
          <div className="container-box">
            <div className="title">
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Tooltip title="Informações sobre o gráfico" placement="top">
                  <InfoIcon sx={{ color: theme.palette.text.secondary }} />
                </Tooltip>
                <Typography variant="h5">Título do gráfico</Typography>
              </Stack>
              <Divider
                orientation="horizontal"
                sx={{ mt: 1, mb: 1, color: theme.palette.divider }}
              />
            </div>
            <div className="dash"></div>
          </div>
        </CustomGridDashItem>
      </Grid>
    </>
  );
}
