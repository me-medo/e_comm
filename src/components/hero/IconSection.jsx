import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme,  } from "@mui/material"
import { ElectricBoltOutlined } from "@mui/icons-material"
import { CreditScoreOutlined } from "@mui/icons-material"
import { WorkspacePremiumOutlined } from "@mui/icons-material"
import { AccessAlarmOutlined } from "@mui/icons-material"


function IconSection() {

    const theme = useTheme()
    return (
        <Container sx={{
            mt: 3,
            bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
        }}>
            <Stack

                divider={useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem /> : null}
                direction={"row"}
                alignItems={"center"}
                sx={{
                    flexWrap: "wrap",
                }}
            >

                <MyBox
                    icon={<ElectricBoltOutlined fontSize="large" />}
                    title={"توصيل سريع"}
                    subtitle={"تبدا من $10"}
                />
                <MyBox
                    icon={<WorkspacePremiumOutlined fontSize="large" />}
                    title={"استعادة الاموال"}
                    subtitle={"7 ايام للاسترجاع"}
                />
                <MyBox
                    icon={<AccessAlarmOutlined fontSize="large" />}
                    title={"365 يوم"}
                    subtitle={"تعاد مجاناً"}
                />
                <MyBox
                    icon={<CreditScoreOutlined fontSize="large" />}
                    title={"الدفع"}
                    subtitle={"نظام دفع آمن"}
                />

            </Stack>
        </Container>
    )
}

export default IconSection




function MyBox({ icon, title, subtitle }) {
    const theme = useTheme()
    return (
        <Box sx={{
            width: "200px",
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            gap: 3,
            justifyContent: useMediaQuery('(min-width:600px)') ? "center" : "left",
            py: 2,
        }}>
            {icon}
            <Box>
                <Typography variant="body1" >{title}</Typography>
                <Typography
                    sx={{ fontWeight: 300, color: theme.palette.text.secondary, }}
                    variant="body1"
                >
                    {subtitle}
                </Typography>

            </Box>
        </Box>
    )
}

