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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FlagIcon from "@mui/icons-material/Flag";
import AddchartIcon from "@mui/icons-material/Addchart";
import SavingsIcon from "@mui/icons-material/Savings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PixIcon from "@mui/icons-material/Pix";
import ArticleIcon from "@mui/icons-material/Article";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const CustomGriItemSmall = styled(Grid)(({ theme }) => ({
  height: "160px",
  width: "100%",
  padding: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  ".container-box": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    // borderRadius: "0 4px 4px 0px",
    //borderRadius: "4px",
    background: theme.palette.action.hover,
    //borderLeft: `8px solid ${theme.palette.action.selected}`,
    h6: {
      fontSize: "1.6em",
      fontWeight: "bold",
      color: theme.palette.text.primary,
    },
    span: {
      color: theme.palette.text.secondary,
      fontSize: "1em",
    },

    svg: {
      fontSize: 54,
      marginRight: "10px",
      color: theme.palette.text.secondary,
    },
  },

  ".footer-div": {
    width: "100%",
    height: "40px",
    background: theme.palette.action.selected,
    //background: `linear-gradient(to right, ${theme.palette.action.selected}, #fff)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "8px",
  },
}));

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
    //borderRadius: "4px",
    background: theme.palette.action.hover,

    ".title": {
      width: "100%",
      height: "60px",
      h5: {
        color: theme.palette.text.primary,
        fontSize: "1.4em",
      },
    },

    ".dash": {
      padding: "20px",
      height: "100%",
      width: "100%",
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

      <Grid container spacing={0}>
        <CustomGriItemSmall item xs={12} sm={6} md={4} lg={4} xl={2}>
          <div className="container-box">
            <Stack direction="column" sx={{ ml: 2 }}>
              <Typography variant="h6">R$ 0,00</Typography>
              <Typography variant="span">Subtítulo</Typography>
            </Stack>
            <AttachMoneyIcon />
          </div>
          <div className="footer-div">
            <span>Título</span>
          </div>
        </CustomGriItemSmall>

        <CustomGriItemSmall item xs={12} sm={6} md={4} lg={4} xl={2}>
          <div className="container-box">
            <Stack direction="column" sx={{ ml: 2 }}>
              <Typography variant="h6">R$ 0,00</Typography>
              <Typography variant="span">Subtítulo</Typography>
            </Stack>
            <AttachMoneyIcon />
          </div>
          <div className="footer-div">
            <span>Título</span>
          </div>
        </CustomGriItemSmall>

        <CustomGriItemSmall item xs={12} sm={6} md={4} lg={4} xl={2}>
          <div className="container-box">
            <Stack direction="column" sx={{ ml: 2 }}>
              <Typography variant="h6">R$ 0,00</Typography>
              <Typography variant="span">Subtítulo</Typography>
            </Stack>
            <AttachMoneyIcon />
          </div>
          <div className="footer-div">
            <span>Título</span>
          </div>
        </CustomGriItemSmall>

        <CustomGriItemSmall item xs={12} sm={6} md={4} lg={4} xl={2}>
          <div className="container-box">
            <Stack direction="column" sx={{ ml: 2 }}>
              <Typography variant="h6">R$ 0,00</Typography>
              <Typography variant="span">Subtítulo</Typography>
            </Stack>
            <AttachMoneyIcon />
          </div>
          <div className="footer-div">
            <span>Título</span>
          </div>
        </CustomGriItemSmall>

        <CustomGriItemSmall item xs={12} sm={6} md={4} lg={4} xl={2}>
          <div className="container-box">
            <Stack direction="column" sx={{ ml: 2 }}>
              <Typography variant="h6">R$ 0,00</Typography>
              <Typography variant="span">Subtítulo</Typography>
            </Stack>
            <AttachMoneyIcon />
          </div>
          <div className="footer-div">
            <span>Título</span>
          </div>
        </CustomGriItemSmall>

        <CustomGriItemSmall item xs={12} sm={6} md={4} lg={4} xl={2}>
          <div className="container-box">
            <Stack direction="column" sx={{ ml: 2 }}>
              <Typography variant="h6">R$ 0,00</Typography>
              <Typography variant="span">Subtítulo</Typography>
            </Stack>
            <AttachMoneyIcon />
          </div>
          <div className="footer-div">
            <span>Título</span>
          </div>
        </CustomGriItemSmall>
      </Grid>

      <Grid container spacing={0}>
        <CustomGridDashItem item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="container-box">
            <div className="title">
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  margin: "12px",
                }}
              >
                <Tooltip title="Informações sobre o gráfico" placement="top">
                  <InfoIcon
                    sx={{
                      color: theme.palette.text.secondary,
                      "&:hover": { cursor: "pointer" },
                    }}
                  />
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
        <CustomGridDashItem item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="container-box">
            <div className="title">
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  margin: "12px",
                }}
              >
                <Tooltip title="Informações sobre o gráfico" placement="top">
                  <InfoIcon
                    sx={{
                      color: theme.palette.text.secondary,
                      "&:hover": { cursor: "pointer" },
                    }}
                  />
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
        <CustomGridDashItem item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="container-box">
            <div className="title">
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  margin: "12px",
                }}
              >
                <Tooltip title="Informações sobre o gráfico" placement="top">
                  <InfoIcon
                    sx={{
                      color: theme.palette.text.secondary,
                      "&:hover": { cursor: "pointer" },
                    }}
                  />
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
