import { useAuth } from "@/context/auth/AuthProvider";
import { Button, Menu, Text, rem } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  FaCalendarAlt,
  FaCog,
  FaMoneyBill,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

function MenuUser() {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button className="!bg-transparent">
          <Image src={"/user_icon.png"} alt="" width={30} height={30} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <Image src={"/user_icon.png"} alt="" width={20} height={20} />
          }
        ></Menu.Item>
        <Menu.Divider />

        <Menu.Item
          leftSection={<FaUser style={{ width: rem(14), height: rem(14) }} />}
          onClick={() => router.push("/profile")}
        >
          Account
        </Menu.Item>
        <Menu.Item
          leftSection={
            <FaMoneyBill style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Balance
        </Menu.Item>
        <Menu.Item
          leftSection={
            <FaCalendarAlt style={{ width: rem(14), height: rem(14) }} />
          }
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Booking
        </Menu.Item>

        <Menu.Item
          leftSection={<FaCog style={{ width: rem(14), height: rem(14) }} />}
        >
          Setting
        </Menu.Item>
        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={
            <FaSignOutAlt style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={() => logout()}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default MenuUser;
