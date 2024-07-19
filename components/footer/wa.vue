<script>
var url =
    "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?9887";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
    enabled: true,
    chatButtonSetting: {
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "40",
        marginBottom: "40",
        ctaIconWATI: false,
        position: "right",
    },
    brandSetting: {
        brandName: "Actor of Parakarsa",
        brandSubTitle: "undefined",
        brandImg:
            "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        welcomeText: "How can we help you?",
        messageText: "Hello, %0A I have a question about {{page_link}}",
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "6289619855558",
    },
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
</script>