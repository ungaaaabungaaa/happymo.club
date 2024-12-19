"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "../../components/ui/animated-list"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'

interface TeamMember {
  name: string
  email: string
  role: "ByBit" | "Binance"
  avatar: string
}

const MemberCard = ({ name, email, role, avatar }: TeamMember) => {
  return (
    <div className="relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-4 transition-all duration-200 ease-in-out hover:bg-white/5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="size-10 overflow-hidden rounded-full bg-gray-800">
            <img src={avatar} alt={`${name}'s avatar`} className="size-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{name}</span>
            <span className="text-sm text-gray-400">{email}</span>
          </div>
        </div>
        <button className="flex items-center gap-1 rounded-lg border border-white/10 bg-black px-4 py-2 text-sm text-white">
          {role}
          <ChevronDown className="size-4" />
        </button>
      </div>
    </div>
  )
}

const teamMembers: TeamMember[] = [
  {
    name: "Sofia Davis",
    email: "Has Followed For 19 Days",
    role: "ByBit",
    avatar: "https://avatar.iran.liara.run/public/17"
  },
  {
    name: "Jackson Lee",
    email: "Has Followed For 3 Days",
    role: "ByBit",
    avatar: "https://avatar.iran.liara.run/public/20"
  },
  {
    name: "Isabella Nguyen",
    email: "Has Followed For 5 Days",
    role: "Binance",
    avatar: "https://avatar.iran.liara.run/public/58"
  },
  {
    name: "Shaym Shindia",
    email: "Has Followed For 6 Days",
    role: "ByBit",
    avatar: "https://avatar.iran.liara.run/public/46"
  },
  {
    name: "Shoaiba Mohammed",
    email: "Has Followed For 9 Days",
    role: "ByBit",
    avatar: "https://avatar.iran.liara.run/public/20"
  },
  {
    name: "Jonas ",
    email: "Has Followed For 21 Days",
    role: "ByBit",
    avatar: "https://avatar.iran.liara.run/public/26"
  }
]

function AnimatedMemberList({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <AnimatedList>
        {teamMembers.map((member, idx) => (
          <MemberCard key={idx} {...member} />
        ))}
      </AnimatedList>
    </div>
  )
}

export default function TeamMembersCard() {
  return (
    <div className="h-full w-full">
      <Card className="bg-black text-white rounded-2xl overflow-hidden h-full">
        <CardHeader className="pb-2">
          <h2 className="text-2xl font-semibold">Followes</h2>
          <p className="text-sm text-gray-400">
            Stability Index 4.0/5.0
          </p>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]">
          <div className="flex flex-col flex-grow -mx-2">
            <AnimatedMemberList />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

