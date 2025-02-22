import Container from "@/design/Container"
import { UserRoundPen } from 'lucide-react';
import SettingHead from "@/design/SettingHead";
import SettingInput from "@/design/SettingInput";

function Setting() {
    const settingsGroups = [
        {
            id: 'account',
            head: {
                icon: UserRoundPen,
                textHead: "اعدادات الحساب",
                hint: "قم بادارة حسابك بسهولة"
            },
            settings: [
                {
                    text: "رؤية الحساب الخاص بك",
                    hint: "اسمح للاطباء برؤية الحساب الخاص بك"
                }
            ]
        },
        {
            id: 'security',
            head: {
                icon: UserRoundPen,
                textHead: "اعدادات الامان",
                hint: "قم بادارة امان حسابك وخصوصيتك"
            },
            settings: [
                {
                    text: "عملية التحقق المزدوج",
                    hint: "اضف طبقة حماية اخري علي حسابك فوق كلمة المرور"
                },
                {
                    text: "شارك تاريخك الطبي",
                    hint: "اسمح للاطباء برؤية تاريخك الطبي"
                }
            ]
        },
        {
            id: 'notifications',
            head: {
                icon: UserRoundPen,
                textHead: "اعدادات الاشعارات",
                hint: "قم بادارة اشعارات الحساب"
            },
            settings: [
                {
                    text: "اشعارات الايميل",
                    hint: "استقبل احدث الاخبار علي الايميل الخاص بك"
                },
                {
                    text: "(SMS) الرسائل الهاتفية",
                    hint: "استقبل احدث الاخبار عن طريق رقم الهاتف الخاص بك"
                },
                {
                    text: "التذكير بالمواعيد المحجوزة مسبقا",
                    hint: "استقبل التنبيهات للتذكير بموعد الدكتور القادم"
                }
            ]
        }
    ];

    const getContainerWidth = (groupLength) => {
        switch (groupLength) {
            case 1:
                return 'w-full';
            case 2:
                return 'w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1rem)]';
            case 3:
            default:
                return 'w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1rem)]';
        }
    };

    const renderSettingsGroup = (groups) => {
        const width = getContainerWidth(groups.length);
        
        return groups.map(group => (
            <Container key={group.id} className={`p-2 m-2 ${width}`}>
                <SettingHead
                    icon={group.head.icon}
                    textHead={group.head.textHead}
                    hint={group.head.hint}
                />
                {group.settings.map((setting, index) => (
                    <SettingInput
                        key={`${group.id}-setting-${index}`}
                        text={setting.text}
                        hint={setting.hint}
                    />
                ))}
            </Container>
        ));
    };

    return (
        <div>
            <h1 className="font-bold text-3xl p-2 m-3">الاعدادات</h1>
            <div className="flex flex-wrap">
                {renderSettingsGroup(settingsGroups)}
            </div>
        </div>
    );
}

export default Setting;